export interface ServiceArea {
  slug: string;
  name: string;
  region: string;
  lead: string;
  overview: string;
  planning: string;
  priorities: string[];
  faqFocus: string;
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'louisville-ky', name: 'Louisville', region: 'Kentucky',
    lead: 'Complete home remodeling for Louisville homeowners who want better function, stronger finishes, and spaces designed around daily life.',
    overview: 'Louisville homes come in many sizes, ages, and architectural styles. R&J Mills Remodeling provides one dependable point of contact for kitchen renovations, bathroom remodels, finished basements, interior updates, decks, porches, and exterior improvements across the Louisville area.',
    planning: 'A successful Louisville remodeling project starts with the way you use your home now and what needs to work better. We help turn those priorities into a clear scope, whether the project is a focused room update or work across several parts of the property.',
    priorities: ['Whole-home project coordination', 'Kitchen and bathroom layout improvements', 'Basement and interior living-space upgrades', 'Deck, porch, and exterior remodeling'],
    faqFocus: 'projects ranging from individual rooms to coordinated interior and exterior improvements',
  },
  {
    slug: 'st-matthews-ky', name: 'St. Matthews', region: 'Kentucky',
    lead: 'Kitchen, bathroom, interior, and exterior remodeling tailored to St. Matthews homes.',
    overview: 'Homeowners in St. Matthews often want modern comfort without losing the qualities that already make their homes feel established. R&J Mills Remodeling helps improve kitchens, bathrooms, lower levels, and outdoor spaces with materials and details selected to feel connected to the rest of the home.',
    planning: 'We begin by looking at circulation, storage, lighting, finishes, and how the updated space should relate to adjoining rooms. That careful approach is useful for both compact renovations and larger reconfigurations.',
    priorities: ['Kitchen storage and workflow', 'Bathroom comfort and accessibility', 'Interior finish continuity', 'Outdoor spaces that complement the home'],
    faqFocus: 'updates that add modern function while respecting the existing home',
  },
  {
    slug: 'crescent-hill-ky', name: 'Crescent Hill', region: 'Kentucky',
    lead: 'Thoughtful remodeling for Crescent Hill homes, from detailed room renovations to practical exterior upgrades.',
    overview: 'Remodeling in Crescent Hill often calls for a careful balance: improve function and performance while keeping the finished work visually connected to the home. We provide kitchen remodeling, bathroom renovation, interior improvements, deck construction, and exterior solutions for local homeowners.',
    planning: 'Before work begins, we focus on the transitions that matter—how new cabinetry meets existing trim, how a revised layout moves, and how materials relate from one room to the next. The goal is an update that feels intentional rather than added on.',
    priorities: ['Character-conscious material choices', 'Space-efficient kitchen layouts', 'Custom tile and bathroom upgrades', 'Decks, doors, windows, and exterior details'],
    faqFocus: 'carefully integrated renovations and space-efficient improvements',
  },
  {
    slug: 'jeffersontown-ky', name: 'Jeffersontown', region: 'Kentucky',
    lead: 'Practical, high-quality home remodeling for Jeffersontown kitchens, bathrooms, interiors, and outdoor spaces.',
    overview: 'R&J Mills Remodeling helps Jeffersontown homeowners make existing spaces more useful, comfortable, and current. Our services cover kitchen reconfiguration, bathroom remodeling, basement finishing, flooring, painting, decks, porches, windows, roofing, and other exterior improvements.',
    planning: 'We organize the project around your priorities and the improvements that will make the biggest difference in everyday use. That may mean opening a kitchen, creating a more accessible shower, finishing underused space, or building a better connection to the backyard.',
    priorities: ['Functional family kitchens', 'Low-maintenance bathroom finishes', 'Finished basements and flexible rooms', 'Decks and backyard living improvements'],
    faqFocus: 'functional updates for active households and long-term use',
  },
  {
    slug: 'fern-creek-ky', name: 'Fern Creek', region: 'Kentucky',
    lead: 'Interior and exterior remodeling services that help Fern Creek homeowners get more from their property.',
    overview: 'From a new kitchen layout to a finished basement or custom deck, R&J Mills Remodeling provides a broad range of home improvement services in Fern Creek. We coordinate the details across bathrooms, kitchens, interiors, and exteriors so the result feels complete.',
    planning: 'Our planning starts with the opportunity in the property: underused rooms, dated finishes, limited storage, or outdoor areas that could serve the household better. We then define a practical remodeling scope around those needs.',
    priorities: ['Basement finishing and added living space', 'Kitchen and bathroom renovations', 'Flooring, painting, and door updates', 'Custom decks, porches, and exterior work'],
    faqFocus: 'projects that expand usable living and outdoor space',
  },
  {
    slug: 'highlands-ky', name: 'The Highlands', region: 'Kentucky',
    lead: 'Detail-focused remodeling for Highlands homeowners improving kitchens, bathrooms, interiors, and exteriors.',
    overview: 'Homes in the Highlands can benefit from upgrades that improve modern function while maintaining a cohesive sense of character. R&J Mills Remodeling handles kitchen and bathroom renovations, interior reconfigurations, custom tile, flooring, doors, decks, porches, and exterior improvements.',
    planning: 'We pay close attention to scale, material transitions, and the relationship between new work and existing details. Whether the goal is a more efficient kitchen or an updated bath, the finished room should feel at home in the property.',
    priorities: ['Layouts that make efficient use of space', 'Materials suited to the home’s character', 'Detailed bathroom and tile work', 'Exterior improvements with a cohesive finish'],
    faqFocus: 'detail-conscious updates that balance character and modern function',
  },
];
