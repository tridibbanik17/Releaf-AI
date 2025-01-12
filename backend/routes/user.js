const express = require("express");
const router = express.Router();
const Plant = require("../models/Plant");
const cohere = require("../cohere");

router.get("/plants", async (req, res) => {
  const plants = await Plant.findAll({ where: { user_id: req.user.id } });
  res.send(plants);
});

// Expects a string with a query
router.post("/plants", async (req, res) => {
  const { plantName, imageUrl, location } = req.body;

  try {
    // Send request for info to cohere
    const response = await cohere.chat({
      model: "command-r-plus",
      messages: [
        {
          role: "system",
          content: `Find the plant based on the name and use the location where it is stored in the house
          provide information about the maintenance level, sunlight, and following in one sentence:
            - watering schedule
            - lifespan (quantify in weeks, months, years. ex: 2 weeks)
            
            And the following in two sentences:
            - general tips for taking care of the plant
            - mental health/health benefits`,
        },
        {
          role: "user",
          content: `name = ${plantName}, location = ${location}`,
        },
      ],
      responseFormat: {
        type: "json_object",
        schema: {
          type: "object",
          properties: {
            maintenance: {
              type: "string",
              enum: ["minimal", "low", "moderate", "high", "intensive"],
            },
            sunlight: {
              type: "string",
              enum: ["full shade", "part shade", "sun-part shade", "full sun"],
            },
            watering: { type: "string" },
            lifespan: { type: "string" },
            generalTips: { type: "string" },
            benefits: { type: "string" },
          },
          required: [
            "maintenance",
            "sunlight",
            "watering",
            "lifespan",
            "generalTips",
            "benefits",
          ],
        },
      },
    });

    const plantRes = JSON.parse(response.message.content[0].text);

    const plant = await Plant.create({
      user_id: req.user.id,
      plantName,
      imageUrl,
      location,
      maintenance: plantRes.maintenance,
      sunlight: plantRes.sunlight,
      watering: plantRes.watering,
      lifespan: plantRes.lifespan,
      generalTips: plantRes.generalTips,
      benefits: plantRes.benefits,
    });

    return res.status(200).send("Successfully created plant!");
  } catch (error) {
    console.log(error);
    res.status(400).send("Failed to create plant");
  }
});

router.delete("/plants/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Plant.destroy({
      where: { user_id: req.user.id, id: id },
    });

    if (result === 0) {
      return res.status(404).send({ message: "Plant not found" });
    }

    res.status(200).send({ message: "Plant deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = router;
