const express = require("express");
const router = express.Router();
const cohere = require("../cohere");
const axios = require("axios");

// Expects a string with a query
router.post("/", async (req, res) => {
  const { query } = req.body;

  try {
    // Cohere call to get 3 plant species
    const plantResponse = await cohere.chat({
      model: "command-r-plus",
      messages: [
        {
          role: "system",
          content: "Recommend 3 different plant names based on the prompt",
        },
        {
          role: "user",
          content: query,
        },
      ],
      responseFormat: {
        type: "json_object",
        schema: {
          type: "object",
          properties: {
            species1: { type: "string" },
            species2: { type: "string" },
            species3: { type: "string" },
          },
          required: ["species1", "species2", "species3"],
        },
      },
    });

    // Parse the response from Cohere
    const cohereRes = JSON.parse(plantResponse.message.content[0].text);

    let finalQuery = "";
    let urls = [];

    console.log("Key = " + process.env.PLANT_API_KEY);

    // Get plant images and scientific names from API
    for (let i = 1; i <= 3; i++) {
      const speciesKey = `species${i}`;
      const speciesName = cohereRes[speciesKey];

      if (speciesName) {
        const url = `https://perenual.com/api/species-list?key=${process.env.PLANT_API_KEY}&q=${speciesName}`;
        try {
          const imagesResponse = await axios.get(url);
          console.log(imagesResponse.data.data[0].default_image.original_url);
          if (imagesResponse.data?.data[0]?.scientific_name) {
            urls.push(imagesResponse.data.data[0].default_image.original_url);
            finalQuery += imagesResponse.data.data[0].scientific_name[0] + "\n";
          } else {
            console.warn(`No data for species: ${speciesName}`);
          }
        } catch (error) {
          console.error(
            `Error fetching data for species ${speciesName}:`,
            error
          );
        }
      }
    }

    console.log("Final query: " + finalQuery);

    // Schema for the second Cohere API call
    const speciesSchema = {
      type: "object",
      properties: {
        common_name: { type: "string" },
        scientific_name: { type: "string" },
        watering: {
          type: "string",
          enum: ["frequent", "average", "minimum", "none"],
        },
        sunlight: {
          type: "string",
          enum: ["full shade", "part shade", "sun-part shade", "full sun"],
        },
        benefits: { type: "string" },
      },
      required: [
        "common_name",
        "scientific_name",
        "watering",
        "sunlight",
        "benefits",
      ],
    };

    // Final Cohere call for additional plant data
    const finalChat = await cohere.chat({
      model: "command-r-plus",
      messages: [
        {
          role: "system",
          content:
            "For each scientific plant name in the list give me the watering, sunlight and 1-2 sentences on mental health/health benefits",
        },
        {
          role: "user",
          content: finalQuery,
        },
      ],
      responseFormat: {
        type: "json_object",
        schema: {
          type: "object",
          properties: {
            species1: speciesSchema,
            species2: speciesSchema,
            species3: speciesSchema,
          },
          required: ["species1", "species2", "species3"],
        },
      },
    });

    const finalRes = JSON.parse(finalChat.message.content[0].text);

    let counter = 0;
    for (const species in finalRes) {
      if (finalRes[species]) {
        finalRes[species].imageUrl = urls[counter];
        counter++;
      }
    }

    return res.send(finalRes);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message || "An error occurred.");
  }
});

module.exports = router;
