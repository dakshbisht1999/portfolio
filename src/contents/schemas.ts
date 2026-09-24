import { z } from 'zod';
export const schemas = {
  pages: {
    home: z.object({
      "hero": z.object({
        "greeting": z.string(),
        "name": z.string(),
        "roles": z.array(z.string()),
        "bio": z.string(),
        "ctaPrimary": z.string(),
        "ctaSecondary": z.string()
      }),
      "marquee": z.object({
        "items": z.array(z.object({
          "id": z.string(),
          "label": z.string()
        }))
      }),
      "skills": z.object({
        "statLabel": z.string(),
        "statValue": z.string(),
        "narrative": z.string(),
        "categories": z.array(z.object({
          "id": z.string(),
          "name": z.string(),
          "accent": z.string(),
          "items": z.array(z.object({
            "id": z.string(),
            "label": z.string()
          }))
        }))
      }),
      "project": z.object({
        "badge": z.string(),
        "name": z.string(),
        "description": z.string(),
        "techStack": z.array(z.object({
          "id": z.string(),
          "label": z.string()
        })),
        "liveUrl": z.string(),
        "githubUrl": z.string(),
        "ctaLive": z.string(),
        "ctaGithub": z.string()
      }),
      "genai": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "narrative": z.string(),
        "concepts": z.array(z.object({
          "id": z.string(),
          "label": z.string()
        }))
      }),
      "cta": z.object({
        "headline": z.string(),
        "ctaProjects": z.string(),
        "ctaContact": z.string()
      })
    }),
    about: z.object({
      "hero": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "bio": z.string()
      }),
      "journey": z.object({
        "headline": z.string(),
        "timeline": z.array(z.object({
          "id": z.string(),
          "year": z.string(),
          "title": z.string(),
          "description": z.string()
        }))
      }),
      "transition": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "body": z.array(z.object({
          "id": z.string(),
          "text": z.string()
        })),
        "learning": z.array(z.object({
          "id": z.string(),
          "label": z.string()
        }))
      }),
      "stats": z.array(z.object({
        "id": z.string(),
        "value": z.string(),
        "label": z.string()
      })),
      "cta": z.object({
        "headline": z.string(),
        "sub": z.string(),
        "ctaContact": z.string(),
        "ctaProjects": z.string()
      })
    }),
    projects: z.object({
      "hero": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "sub": z.string()
      }),
      "featured": z.object({
        "badge": z.string(),
        "name": z.string(),
        "tagline": z.string(),
        "description": z.string(),
        "highlights": z.array(z.object({
          "id": z.string(),
          "text": z.string()
        })),
        "techStack": z.array(z.object({
          "id": z.string(),
          "label": z.string()
        })),
        "liveUrl": z.string(),
        "githubUrl": z.string(),
        "ctaLive": z.string(),
        "ctaGithub": z.string()
      }),
      "other": z.array(z.object({
        "id": z.string(),
        "status": z.string(),
        "name": z.string(),
        "description": z.string(),
        "techStack": z.array(z.object({
          "id": z.string(),
          "label": z.string()
        })),
        "liveUrl": z.string(),
        "githubUrl": z.string()
      })),
      "cta": z.object({
        "headline": z.string(),
        "sub": z.string(),
        "ctaGithub": z.string(),
        "ctaContact": z.string()
      })
    }),
    skills: z.object({
      "hero": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "sub": z.string()
      }),
      "stacks": z.array(z.object({
        "id": z.string(),
        "name": z.string(),
        "icon": z.string(),
        "color": z.string(),
        "description": z.string(),
        "skills": z.array(z.object({
          "id": z.string(),
          "name": z.string(),
          "level": z.number()
        }))
      })),
      "tools": z.object({
        "headline": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "label": z.string()
        }))
      }),
      "learning": z.object({
        "headline": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "title": z.string(),
          "description": z.string()
        }))
      })
    }),
    contact: z.object({
      "hero": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "sub": z.string()
      }),
      "form": z.object({
        "heading": z.string(),
        "namePlaceholder": z.string(),
        "emailPlaceholder": z.string(),
        "subjectPlaceholder": z.string(),
        "messagePlaceholder": z.string(),
        "submitLabel": z.string(),
        "sendingLabel": z.string(),
        "successHeadline": z.string(),
        "successBody": z.string(),
        "errorBody": z.string()
      }),
      "links": z.object({
        "headline": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "label": z.string(),
          "handle": z.string(),
          "url": z.string(),
          "icon": z.string()
        }))
      }),
      "availability": z.object({
        "status": z.string(),
        "detail": z.string()
      })
    })
  }
};
export type Schemas = typeof schemas;