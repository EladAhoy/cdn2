import { useEffect, useState } from 'react';
import './Content.css';
import FunFacts from './FunFacts';
import BusinessCard from './BusinessCard';
import ToastWithBackdrop from './ToastWithBackdrop';
import CheckoutPage from './CheckoutPage';
import Navbar from './DropDown';

function renderCards({ types }) {
  if (!types) return;
  const cards = types?.map((type, index) => <BusinessCard key={index} type={type} />);
  return (cards);
}

export default function Content() {
  const [showToast, setshowToast] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setshowToast(false), 5800);
    return () => clearTimeout(timer);
  }, []);
  const options = [
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

  const optionsComplex = [
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
    }, ...options]

  return (
    <main className="content">
      <ToastWithBackdrop show={showToast} />
      <section className='fun-facts'>
        <FunFacts />
      </section>
      <section className='DropDown'>
        <Navbar options={optionsComplex} />
      </section> 
      <section className='shows'>
        <CheckoutPage />
      </section> 
      <section className='cards'>
        {renderCards({ types: ['profile', 'mockCheckout', 'navbar'] })}            
      </section>        
    </main>);
}


