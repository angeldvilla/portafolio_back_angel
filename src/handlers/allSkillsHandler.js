const skillsData = require("../../data/skills.json");

module.exports = async (req, res) => {
  try {
    const softSkills = skillsData.map((softSk) => ({
      id: softSk.id,
      title: softSk.title,
      description: softSk.description,
      image: softSk.image,
    }));

    const techSkills = skillsData.map((techSk) => ({
      id: techSk.id,
      title: techSk.title,
      image: techSk.image,
    }));

    return res.status(200).json({
      softSkills: softSkills,
      techSkills: techSkills,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};
