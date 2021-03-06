import database from '../../database'
import dataRepository from '../index'

describe('repository', () => {
  let repository
  beforeEach(() => (repository = dataRepository(database)))

  test('getHome', async () => {
    expect(await repository.getHome()).toEqual({
      id: '1',
      heading: 'Qantas Cars',
      heroImageUrl:
        'https://drive.google.com/uc?id=1svw9VdyX4fyRHd1kggq0akDSafmdOS7L',
      subheading:
        'Powered by the sun with the best safety record on the planet',
    })
  })

  test('getFaqs', async () => {
    expect(await repository.getFaqs()).toEqual([
      {
        id: '1',
        body:
          'Model 3 reservation holders can check their latest delivery timing estimate in their Tesla Account.',
        title: 'How can I check my estimated delivery window?',
      },
      {
        id: '2',
        body:
          '<p>Model 3 reservation holders are receiving invitations to order and design Model 3 based on the time and date that they placed their reservation. Current Tesla owners have priority as a thank you for their support.</p><p>Deliveries will start in the United States first, with international deliveries starting in left-hand drive markets in late 2018, followed by right-hand drive markets in 2019.</p>',
        title:
          'When will I be invited to configure my Model 3, and when can I take delivery?',
      },
      {
        id: '3',
        body:
          'Our first Model 3 in production comes with a long-range battery, 310 miles of range, rear-wheel drive and premium upgrades throughout, beginning at $49,000 USD. In early 2018, we will introduce the option for a standard battery with 220 miles of range and standard equipment, beginning at $35,000 USD.',
        title: 'Which Model 3 features are currently available?',
      },
    ])
  })
})
