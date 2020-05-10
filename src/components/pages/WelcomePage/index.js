import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import {
  FaCoffee,
  FaEnvelope,
  FaEye,
  FaGithub,
  FaPlug,
  FaSpotify,
  FaStopwatch,
  FaTwitter
} from 'react-icons/fa';
import { withRouter } from 'react-router-dom';
import logo from '../../../playlish_logo_white.svg';
import './styles.css';

class WelcomePageComponent extends Component {
  /**
   * Redirects the user to the Spotify sign in view.
   * The user will be redirected to the /search view afterwards.
   */
  redirectToSpotifySignin = () => {
    const scopesArray = [
      'user-read-private',
      'user-read-email',
      'playlist-read-private',
      'playlist-modify-public',
      'playlist-modify-private',
      'playlist-read-collaborative'
    ];
    const scopes = scopesArray.join(' ');
    const clientId = '341cbbaadca743aba2dd3f99302f623f';
    const responseType = 'token';
    const redirectUri = 'http:%2F%2Flocalhost:3000%2Fcallback';
    const state = '123'; //TODO generate a random string
    window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=${responseType}&redirect_uri=${redirectUri}&state=${state}&scope=${encodeURIComponent(
      scopes
    )}`;
  };

  redirectTo = pathname => {
    this.props.history.push(pathname);
  };

  linkToGithub = () => {
    window.open('https://github.com/litil/playlish');
  };

  linkToTwitter = () => {
    window.open('https://twitter.com/shipasap');
  };

  linkToBuyMeACoffee = () => {
    window.open('https://www.buymeacoffee.com/3z7CnoJ');
  };

  mailTo = () => {
    window.location.href = `mailto:guillaume.p.lambert@gmail.com`;
  };

  render() {
    const howItWorksRef = React.createRef();
    const pricingRef = React.createRef();

    const handleClickHowItWorks = () =>
      howItWorksRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

    const handleClickPricing = () =>
      pricingRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

    return (
      <div className="min-h-screen flex flex-col pt-4 WelcomePage-container">
        <nav>
          <div className="container mx-auto px-6 py-2 mb-12 flex justify-between items-center">
            <div
              className="flex flex-row items-center cursor-pointer"
              onClick={() => this.redirectTo('/')}
            >
              <img src={logo} alt="logo" className="h-6 w-6 mr-2" />
              <h1 className="font-bold text-xl lg:text-2xl text-blue-100 font-sans tracking-widest">
                Playlish
              </h1>
            </div>
            <ul className="flex flex-row">
              <li
                className="cursor-pointer text-blue-100 hover:text-customBlue-300 ml-4"
                onClick={handleClickHowItWorks}
              >
                How does it works?
              </li>
              <li
                className="cursor-pointer text-blue-100 hover:text-customBlue-300 ml-4"
                onClick={handleClickPricing}
              >
                Pricing
              </li>
            </ul>
          </div>
        </nav>

        <div className="container mx-auto flex flex-col justify-center align-items">
          <h2 className="font-bold text-4xl lg:text-6xl text-blue-100 mb-1 tracking-widest mt-32 justify-center items-center">
            Welcome to Playlish
          </h2>
          <div className="container flex flex-row items-center justify-center">
            <h4 class="flex text-lg lg:text-xl text-customBlue-300 mb-12 w-1/2">
              Discover the fastest playlist generator for Spotify.
              <br />
              See all your playlists at a glance with tons of metrics.
              <br />
              Create new playlists from the top 5 songs of artists you searched for in seconds!
            </h4>
          </div>

          <div className="container flex flex-row items-center justify-center">
            <button
              // class="bg-transparent hover:bg-blue-500 text-blue-100 font-semibold py-2 px-8 border border-solid border-blue-100 hover:border-transparent uppercase rounded-xl flex flex-row items-center justify-center"
              class="bg-customBlue-500 hover:bg-customBlue-700 text-blue-100 font-semibold py-2 px-8 border border-solid border-transparent uppercase rounded-xl flex flex-row items-center justify-center"
              onClick={this.redirectToSpotifySignin}
            >
              <FaSpotify />
              <span className="ml-2 text-m">Get started</span>
            </button>
          </div>

          <div
            className="container flex flex-col items-center justify-center mt-48"
            id="how-it-works-section"
          >
            <h3
              ref={howItWorksRef}
              className="
            font-bold text-2xl 
            lg:text-4xl text-blue-100 mb-1 
            tracking-widest mb-20
            justify-center items-center WelcomePage-SectionTitle"
            >
              How does it works?
            </h3>
            <IconContext.Provider value={{ color: '#48bb78', size: '3em' }}>
              <div>
                <FaPlug />
              </div>
            </IconContext.Provider>
            <h4 className="text-xl lg:text-2xl text-blue-100 mt-6 mb-6 w-1/2 tracking-wider">
              Connect to your music provider(s)
            </h4>
            <span className="flex text-base lg:text-lg text-customBlue-300 mb-20 w-1/2">
              Securely connect your account with your music providers(s).
              <br />
              We've started with Spotify for now but we'll add more providers very soon. Stay tuned!
            </span>

            <IconContext.Provider value={{ color: '#4299e1', size: '3em' }}>
              <div>
                <FaEye />
              </div>
            </IconContext.Provider>
            <h4 className="text-xl lg:text-2xl text-blue-100 mt-6 mb-6 w-1/2 tracking-wider">
              Manage your playlists easily
            </h4>
            <span className="flex text-base lg:text-lg text-customBlue-300 mb-20 w-1/2">
              Benefit from a tailored UI to help you see all your playlists at a glance.
              <br />
              And inspect them more deeply thanks to tons of metrics such as full duration,
              popularity and many more!
            </span>

            <IconContext.Provider value={{ color: '#ecc94b', size: '3em' }}>
              <div>
                <FaStopwatch />
              </div>
            </IconContext.Provider>
            <h4 className="text-xl lg:text-2xl text-blue-100 mt-6 mb-6 w-1/2 tracking-wider">
              Create playlists in seconds
            </h4>
            <span className="flex text-base lg:text-lg text-customBlue-300 mb-20 w-1/2">
              Stop wasting time adding songs one by one to your playlists.
              <br />
              Just search for artists and we'll automatically create a new playlist with their top 5
              songs.
            </span>
          </div>

          <div className="container flex flex-col items-center justify-center mt-20 mb-24">
            <span className="flex text-xl lg:text-2xl text-blue-100  w-2/3">
              "I go to several festivals every year and official playlists don't work for me at all.
              Playlish helps me creating my very own playlists focused on artists I want to
              discover. I don't lose hours creating them anymore!"
            </span>
          </div>

          <div
            className="container flex flex-col items-center justify-center mt-48 mb-32"
            id="pricing-section"
          >
            <h3
              ref={pricingRef}
              className="
            font-bold text-2xl 
            lg:text-4xl text-blue-100 mb-1 
            tracking-widest mb-12
            justify-center items-center WelcomePage-SectionTitle"
            >
              Pricing
            </h3>

            <div className="flex flex-row justify-center items-center">
              <div className="flex flex-col bg-blue-100 mx-4 w-1/4">
                <div
                  className="flex flex-col 
                p-2 
                bg-blue-500 text-blue-100 
                text-xl lg:text-2xl 
                font-bold 
                mb-8"
                >
                  Hobby
                </div>
                <div className="flex flex-col  px-8 text-customBlue-900">
                  <span className="font-bold">Free</span>
                  <span className="italic">Recommended for individuals and music enthusiasts</span>
                  <hr className="text-customBlue-900 mt-12 mb-8" />
                  <ul className="h-64">
                    <li className="my-2">1 music provider</li>
                    <li className="my-2">Create up to 10 playlists</li>
                    <li className="my-2">Access level 1 metrics</li>
                  </ul>
                  <button
                    class="
                      bg-customBlue-500 hover:bg-customBlue-700 
                      text-blue-100 hover:text-blue-100
                      font-semibold 
                      py-2 px-8
                      mx-8 
                      mt-20 mb-2
                      border border-solid border-blue-500 hover:border-transparent 
                      uppercase 
                      rounded-xl 
                      flex flex-row items-center justify-center"
                    onClick={this.redirectToSpotifySignin}
                  >
                    <span className="ml-2 text-sm">Select plan</span>
                  </button>
                </div>
              </div>

              <div className="flex flex-col bg-blue-100 mx-4 w-1/4">
                <div
                  className="flex flex-col 
                p-2 
                bg-blue-500 text-blue-100 
                text-xl lg:text-2xl 
                font-bold 
                mb-8"
                >
                  Professional
                </div>
                <div className="flex flex-col  px-8 text-customBlue-900">
                  <span className="font-bold">$10/month</span>
                  <span className="italic">
                    Recommended for festival managers, music blog owner or heavy playlists creator
                  </span>
                  <hr className="text-customBlue-900 my-8" />
                  <ul>
                    <li className="my-2">Up to 3 music providers</li>
                    <li className="my-2">Unlimited playlists</li>
                    <li className="my-2">Access to beta features</li>
                    <li className="my-2">Support</li>
                    <li className="my-2">Analytics dashboard</li>
                    <li className="my-2">Weekly/monthly reports</li>
                  </ul>
                  <span className="font-customBlue-900 italic text-sm mt-8">
                    Plan under construction. Please contact us if you're interested and share with
                    us the killer feature(s) you want us to implement.
                  </span>
                  <button
                    className="
                      bg-customBlue-500 hover:bg-customBlue-700 
                      text-blue-100 hover:text-blue-100
                      font-semibold 
                      py-2 px-8
                      mx-8 
                      mt-3 mb-2
                      border border-solid border-blue-500 hover:border-transparent 
                      uppercase 
                      rounded-xl 
                      flex flex-row items-center justify-center"
                  >
                    <a href="mailto:guillaume.p.lambert@gmail.com">
                      <span className="ml-2 text-xs">Contact us</span>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <h4 className="text-xl lg:text-2xl text-blue-100 mt-6 mb-6 tracking-wider">
            Give Playlish a try, it's free!
          </h4>
          <div className="container flex flex-row items-center justify-center">
            <button
              // class="bg-transparent hover:bg-blue-500 text-blue-100 font-semibold py-2 px-8 border border-solid border-blue-100 hover:border-transparent uppercase rounded-xl flex flex-row items-center justify-center"
              class="bg-customBlue-500 hover:bg-customBlue-700 text-blue-100 font-semibold py-2 px-8 border border-solid border-transparent uppercase rounded-xl flex flex-row items-center justify-center"
              onClick={this.redirectToSpotifySignin}
            >
              <FaSpotify />
              <span className="ml-2 text-m">Get started</span>
            </button>
          </div>

          <div className="flex flex-col items-center justify-center text-sm mt-24 mb-4">
            <ul className="flex flex-row">
              <li
                className="cursor-pointer text-blue-100 hover:text-customBlue-300 ml-2 mr-2 "
                onClick={this.linkToGithub}
              >
                <IconContext.Provider value={{ color: '#9EAFE2', size: '1.2em' }}>
                  <div>
                    <FaGithub />
                  </div>
                </IconContext.Provider>
              </li>
              <li
                className="cursor-pointer text-blue-100 hover:text-customBlue-300 ml-2 mr-2"
                onClick={this.linkToTwitter}
              >
                <IconContext.Provider value={{ color: '#9EAFE2', size: '1.2em' }}>
                  <div>
                    <FaTwitter />
                  </div>
                </IconContext.Provider>
              </li>
              <li
                className="cursor-pointer text-blue-100 hover:text-customBlue-300 ml-2 mr-2"
                onClick={this.linkToBuyMeACoffee}
              >
                <IconContext.Provider value={{ color: '#9EAFE2', size: '1.2em' }}>
                  <div>
                    <FaCoffee />
                  </div>
                </IconContext.Provider>
              </li>
              <li
                className="cursor-pointer text-blue-100 hover:text-customBlue-300 ml-2 mr-2"
                onClick={this.mailTo}
              >
                <IconContext.Provider value={{ color: '#9EAFE2', size: '1.2em' }}>
                  <div>
                    <FaEnvelope />
                  </div>
                </IconContext.Provider>
              </li>
            </ul>
            <ul className="flex flex-row text-xs lg:text-sm text-customBlue-300 mt-2">
              <li>Copyright © 2020 Playlish</li>
              <li className="mx-2">•</li>
              <li>
                A{' '}
                <a
                  href="https://twitter.com/shipasap"
                  target="_blank"
                  className="hover:text-customBlue-500 cursor-pointer"
                >
                  @shipasap
                </a>{' '}
                product
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(WelcomePageComponent);
