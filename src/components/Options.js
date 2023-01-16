export const options =
  [
    {
      label: 'Project2',
      children: [
        {
          label: 'About Us',
          children: [
            {
              label: 'Our Team',
              children: [
                {
                  label: 'John Smith',
                },
                {
                  label: 'Jane Doe',
                },
              ],
            },
            {
              label: 'Our History',
            },
          ],
        },
        {
          label: 'Contact Us',
          children: [
            {
              label: 'Email',
              children: [
                {
                  label: 'support@example.com',
                },
                {
                  label: 'sales@example.com',
                },
              ],
            },
            {
              label: 'Phone',
              children: [
                {
                  label: '+1 555 555 5555',
                },
                {
                  label: '+1 555 555 5556',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: 'Products',
      children: [
        {
          label: 'Category 1',
          children: [
            {
              label: 'Product 1',
            },
            {
              label: 'Product 2',
            },
          ],
        },
        {
          label: 'Category 2',
          children: [
            {
              label: 'Product 3',
            },
            {
              label: 'Product 4',
            },
          ],
        },
      ],
    },
    {
      label: 'Blog',
    },
  ];

export const optionsComplex = [
  {
    label: 'Project1',
    children: [
      {
        label: 'About Us',
        children: [
          {
            label: 'Our Story',
            children: [
              {
                label: 'Company History',
                children: [
                  {
                    label: 'Year 1',
                    children: [
                      {
                        label: 'Milestone 1',
                      },
                      {
                        label: 'Milestone 2',
                      },
                    ],
                  },
                  {
                    label: 'Year 2',
                    children: [
                      {
                        label: 'Milestone 3',
                      },
                      {
                        label: 'Milestone 4',
                      },
                    ],
                  },
                ],
              },
              {
                label: 'Our Vision',
                children: [
                  {
                    label: 'Mission Statement',
                  },
                  {
                    label: 'Values',
                    children: [
                      {
                        label: 'Integrity',
                      },
                      {
                        label: 'Excellence',
                      },
                      {
                        label: 'Innovation',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            label: 'Management Team',
            children: [
              {
                label: 'CEO',
                children: [
                  {
                    label: 'Bio',
                  },
                  {
                    label: 'Contact',
                    children: [
                      {
                        label: 'Email',
                      },
                      {
                        label: 'Phone',
                      },
                    ],
                  },
                ],
              },
              {
                label: 'CFO',
                children: [
                  {
                    label: 'Bio',
                  },
                  {
                    label: 'Contact',
                    children: [
                      {
                        label: 'Email',
                      },
                      {
                        label: 'Phone',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        label: 'Contact Us',
        children: [
          {
            label: 'Email',
            children: [
              {
                label: 'support@example.com',
              }]
          }]
      }]
  }, ...options];
