export default function getUserFieldForVisualization(element) {
  const value = {
    name: { type: 'string', text: element.name, isMainField: true },
    username: { type: 'string', text: element.username },
    email: {
      type: 'link',
      text: element.email,
      href: '#',
    },
    phone: { type: 'string', text: element.phone },
    website: {
      type: 'link',
      text: element.website,
      href: '#',
    },
  };
  return value;
}
