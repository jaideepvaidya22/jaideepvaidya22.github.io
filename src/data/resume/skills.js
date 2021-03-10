// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Solidworks',
    competency: 4,
    category: ['3D-CAD/CAM'],
  },
  {
    title: 'Siemens NX',
    competency: 3,
    category: ['3D-CAD/CAM'],
  },
  {
    title: 'Fusion360',
    competency: 3,
    category: ['3D-CAD/CAM'],
  },
  {
    title: 'AutoCAD',
    competency: 4,
    category: ['3D-CAD/CAM'],
  },
  {
    title: 'Digimat',
    competency: 2,
    category: ['3D-CAD/CAM'],
  },
  {
    title: 'Moldex',
    competency: 2,
    category: ['3D-CAD/CAM'],
  },
  {
    title: 'CATIA v5',
    competency: 3,
    category: ['3D-CAD/CAM'],
  },
  {
    title: 'GD&T',
    competency: 3,
    category: ['3D-CAD/CAM'],
  },
  {
    title: 'Hyperworks',
    competency: 3,
    category: ['Simulation & Analysis'],
  },
  {
    title: 'Ansys Workbench',
    competency: 4,
    category: ['Simulation & Analysis'],
  },
  {
    title: 'Solidworks Simulation',
    competency: 4,
    category: ['Simulation & Analysis'],
  },
  {
    title: 'MATLAB',
    competency: 3,
    category: ['Simulation & Analysis'],
  },
  {
    title: 'Simulink',
    competency: 3,
    category: ['Simulation & Analysis'],
  },
  {
    title: '3D Printing',
    competency: 5,
    category: ['Manufacturing Technologies'],
  },
  {
    title: 'SLS',
    competency: 3,
    category: ['Manufacturing Technologies'],
  },
  {
    title: 'FDM',
    competency: 3,
    category: ['Manufacturing Technologies'],
  },
  {
    title: 'Generative Design',
    competency: 3,
    category: ['Manufacturing Technologies', '3D-CAD/CAM'],
  },
  {
    title: 'CNC',
    competency: 3,
    category: ['Manufacturing Technologies'],
  },
  {
    title: 'Lathe',
    competency: 4,
    category: ['Manufacturing Technologies'],
  },
  {
    title: 'Milling',
    competency: 4,
    category: ['Manufacturing Technologies'],
  },
  {
    title: 'DMAIC',
    competency: 5,
    category: ['Six-Sigma Green-Belt Certification'],
  },
  {
    title: 'Process Capability',
    competency: 4,
    category: ['Six-Sigma Green-Belt Certification'],
  },
  {
    title: 'Statistical Quality Control',
    competency: 4,
    category: ['Six-Sigma Green-Belt Certification'],
  },
  {
    title: 'MiniTab',
    competency: 4,
    category: ['Six-Sigma Green-Belt Certification'],
  },
  {
    title: 'APQP',
    competency: 3,
    category: ['Six-Sigma Green-Belt Certification'],
  },
  {
    title: 'PPAP',
    competency: 3,
    category: ['Six-Sigma Green-Belt Certification'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#CC6BB1',
  '#16b8f3',
  '#FF971A',
  '#16A085',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
