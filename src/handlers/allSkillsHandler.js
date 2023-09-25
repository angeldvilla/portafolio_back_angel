const skillsData = require("../../data/skills.json");

module.exports = async (req, res) => {
  try {

    const soft = skillsData.softSkills.map((softSk) => ({
      id: softSk.id,
      title: softSk.title,
      description: softSk.description,
      image: softSk.image,
    }))
    
    const tech = skillsData.techSkills.map((techSk) => ({
      id: techSk.id,
      title: techSk.title,
      image: techSk.image,
    }));
    return res.status(200).json( {soft, tech} );
    
  } catch (error) {
    return res.status(500).json(error);
  }
};
