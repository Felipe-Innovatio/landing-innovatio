/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://innovatio-it.com',
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/privacidad'],
  
  additionalPaths: async (config) => [
    { loc: '/', changefreq: 'weekly', priority: 1.0 },
    { loc: '/servicios', priority: 0.9 },
    { loc: '/servicios/desarrollo', priority: 0.8 },
    { loc: '/servicios/hosting', priority: 0.8 },
    { loc: '/servicios/consultoria', priority: 0.8 },
    { loc: '/servicios/ciberseguridad', priority: 0.8 },
    { loc: '/servicios/ia', priority: 0.8 },
    { loc: '/nosotros', priority: 0.8 },
    { loc: '/precios', priority: 0.8 },
    { loc: '/contacto', priority: 0.8 },
    { loc: '/blog', priority: 0.9 },
    { loc: '/blog/cuanto-cuesta-pagina-web-chile-2026', priority: 0.7 },
    { loc: '/blog/wordpress-vs-codigo-a-medida', priority: 0.7 },
    { loc: '/blog/ciberseguridad-pymes-chile', priority: 0.7 },
    { loc: '/blog/ia-empresas-chile-como-empezar', priority: 0.7 },
  ],

  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [
      'https://innovatio-it.com/sitemap.xml',
    ],
  },
};