import './App.css'

function App() {

  return (
    <>
      {/* TOP */}
      <div className='top'>
        <div className='top-content-wrapper'>
          <div className='top-logo-cta'>
            <span className='logo'><img src='/logo.png' alt='Logo' /></span>
            <span className='cta'>Professional Website Design Services</span>
          </div>
          <div className='top-image'>
            <img src='/stock.png' alt='Stock' />
          </div>
        </div>
      </div>

      {/* MID */}
      <div className='mid'>
        <div className='mid-content-wrapper'>
          <div className='pricing'>
            <span className='pricing-header'>Pricing That Fits Your Goals and Budget</span>
            <span className='pricing-copy'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
          </div>
          <div className='cards'>
            <div className='card'>
              <span className='emblem'><img src='/icons/essentials.png'></img></span>
              <span className='level'>Essentials</span>
              <span className='price'>$399</span>
              <hr />
              <ul>
                <li>Targeted Ads</li>
                <li>Budget Control</li>
                <li>Content Recommendations</li>
                <li>Ad Copywriting</li>
                <li>Monthly Reporting</li>
              </ul>
            </div>
            <div className='card big'>
              <span className='emblem'><img src='/icons/cut-diamond.png'></img></span>
              <span className='level'>Professional</span>
              <span className='price'>$799</span>
              <hr />
              <ul>
                <li>Targeted Ads</li>
                <li>Budget Control</li>
                <li>Content Recommendations</li>
                <li>Ad Copywriting</li>
                <li>Monthly Reporting</li>
              </ul>
            </div>
            <div className='card'>
              <span className='emblem'><img src='/icons/rupee.png'></img></span>
              <span className='level'>Enterprise</span>
              <span className='price'>$1299</span>
              <hr />
              <ul>
                <li>Targeted Ads</li>
                <li>Budget Control</li>
                <li>Content Recommendations</li>
                <li>Ad Copywriting</li>
                <li>Monthly Reporting</li>
              </ul>
            </div>
          </div>

          {/* bottom */}
          <div className='footer'>
            <span>📧 sales@firstclass-media.com</span>
            <span>📞 773-202-4560</span>
            <span><a href='#'>🔗 firstclass-media.com</a></span>
          </div>
        </div>
      </div>


    </>
  )
}

export default App
