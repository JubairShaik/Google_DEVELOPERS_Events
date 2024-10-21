export const headerLinks = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Create Event',
    route: '/events/create',
  },
  {
    label: 'Admin Profile',
    route: '/profile',
  },
  {
    label: 'Certificates',
    route: '/certificates',
  },
  {
    label: 'Tickets',
    route: '/tickets',
  },
  {
    label: 'GDG Events',
    route: '/all-events',
  },
]

export const eventDefaultValues = {
  title: '',
  description: '',
  location: '',
  imageUrl: '',
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: '',
  price: '',
  isFree: false,
  url: '',
}
