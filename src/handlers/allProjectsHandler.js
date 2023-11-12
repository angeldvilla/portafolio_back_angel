const projectsData = require("../../data/projects.json");

module.exports = (req, res) => {
  try {
    const projects = projectsData.map((project) => ({
      id: project.id,
      title: project.title,
      description: project.description,
      image: project.image,
      repositorio: project.repositorio,
      enlace: project.enlace,
    }));

    return res.status(200).json(projects);
  } catch (error) {
    return res.status(500).json(error);
  }
};
