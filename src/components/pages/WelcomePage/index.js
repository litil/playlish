import React, { Component } from 'react';
import ReactGA from 'react-ga';
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
    const redirectUri = process.env.REACT_APP_SPOTIFY_CALLBACK_URL;
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

    const handleClickHowItWorks = () => {
      howItWorksRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      ReactGA.event({
        category: 'Welcome Page',
        action: 'How it works link'
      });
    };

    const handleClickPricing = () => {
      pricingRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      ReactGA.event({
        category: 'Welcome Page',
        action: 'Pricing link'
      });
    };

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
                How does it work?
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
            <h4 className="flex text-lg lg:text-xl text-customBlue-300 mb-12 lg:w-1/2 w-3/4">
              Discover the fastest playlist generator for Spotify.
              <br />
              See all your playlists at a glance with tons of metrics.
              <br />
              Create new playlists from the top 5 songs of artists you searched for in seconds!
            </h4>
          </div>

          <div className="container flex flex-row items-center justify-center">
            <button
              // className="bg-transparent hover:bg-blue-500 text-blue-100 font-semibold py-2 px-8 border border-solid border-blue-100 hover:border-transparent uppercase rounded-xl flex flex-row items-center justify-center"
              className="bg-customBlue-500 hover:bg-customBlue-700 text-blue-100 font-semibold py-2 px-8 border border-solid border-transparent uppercase rounded-xl flex flex-row items-center justify-center"
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
              How does it work?
            </h3>
            <IconContext.Provider value={{ color: '#48bb78', size: '3em' }}>
              <div>
                <FaPlug />
              </div>
            </IconContext.Provider>
            <h4 className="text-xl lg:text-2xl text-blue-100 mt-6 mb-6 lg:w-1/2 w-3/4 tracking-wider">
              Connect to your music provider(s)
            </h4>
            <span className="flex text-base lg:text-lg text-customBlue-300 mb-20 lg:w-1/2 w-3/4">
              Securely connect your account with your music providers(s).
              <br />
              We've started with Spotify for now but we'll add more providers very soon. Stay tuned!
            </span>

            <IconContext.Provider value={{ color: '#4299e1', size: '3em' }}>
              <div>
                <FaEye />
              </div>
            </IconContext.Provider>
            <h4 className="text-xl lg:text-2xl text-blue-100 mt-6 mb-6 lg:w-1/2 w-3/4 tracking-wider">
              Manage your playlists easily
            </h4>
            <span className="flex text-base lg:text-lg text-customBlue-300 mb-20 lg:w-1/2 w-3/4">
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
            <h4 className="text-xl lg:text-2xl text-blue-100 mt-6 mb-6 lg:w-1/2 w-3/4 tracking-wider">
              Create playlists in seconds
            </h4>
            <span className="flex text-base lg:text-lg text-customBlue-300 mb-20 lg:w-1/2 w-3/4">
              Stop wasting time adding songs one by one to your playlists.
              <br />
              Just search for artists and we'll automatically create a new playlist with their top 5
              songs.
            </span>
          </div>

          <div className="container flex flex-col items-center justify-center mt-20 mb-24">
            <span className="flex text-xl lg:text-2xl text-blue-100  lg:w-2/3 w-3/4">
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

            <h4
              className="font-bold text-xl 
            lg:text-3xl text-blue-100 mb-1 "
            >
              The right price for you, whoever you are
            </h4>
            <span className="flex text-base lg:text-lg text-customBlue-300">
              Paid plans under construction. Please contact us if you're interested or if you want
              to suggest features.
            </span>

            <div className="mt-16 lg:mt-20 ">
              <div className="relative z-0">
                {/* <div className="absolute inset-0 h-5/6 bg-gray-900 lg:h-2/3"></div> */}
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="relative lg:grid lg:grid-cols-10">
                    <div className="max-w-lg mx-auto lg:max-w-none lg:mx-0 lg:col-start-4 lg:col-end-8 lg:row-start-1 lg:row-end-4">
                      <div className="relative z-10 rounded-lg shadow-xl">
                        <div>
                          <div className="pointer-events-none absolute inset-0 rounded-lg border-2 border-blue-500"></div>
                          <div className="absolute inset-x-0 top-0 transform translate-y-px">
                            <div className="flex justify-center transform -translate-y-1/2">
                              <span
                                className="
                                inline-flex rounded-full bg-blue-500 
                                px-6 py-2 text-sm leading-5 
                                font-semibold tracking-wider uppercase text-white"
                              >
                                Most popular
                              </span>
                            </div>
                          </div>
                          <div className="bg-white rounded-t-lg px-6 pt-12 pb-10">
                            <div>
                              <h2 className="mt-2 text-center text-3xl leading-9 font-semibold font-display text-gray-900 sm:-mx-6">
                                Essential
                              </h2>
                              <div className="mt-4 flex items-center justify-center font-display">
                                <span className="px-3 flex items-start text-6xl leading-none tracking-tight font-medium text-gray-900 sm:text-7xl">
                                  <span className="mt-2 mr-1 text-4xl leading-none sm:text-5xl">
                                    $
                                  </span>
                                  <span>10</span>
                                </span>
                                <span className="text-2xl leading-8 font-semibold text-gray-400 tracking-wide sm:text-3xl sm:leading-9">
                                  /month
                                </span>
                              </div>
                            </div>
                          </div>
                          <div
                            className="border-t-2 border-gray-100 rounded-b-lg pt-4 pb-8 px-6 bg-gray-50 sm:px-10 sm:pt-4 sm:pb-10 
                          bg-blue-100 text-sm"
                          >
                            <p className="italic px-8 mt-2 mb-8 text-customBlue-900">
                              Recommended for music blog owner or heavy playlists creator
                            </p>
                            <ul>
                              <li className="flex items-start">
                                <div className="flex-shrink-0">
                                  <svg
                                    className="h-6 w-6 text-blue-600"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M5 13l4 4L19 7"
                                    ></path>
                                  </svg>
                                </div>
                                <p className="ml-3 text-base leading-6 font-medium text-customBackground-900">
                                  Everything from the hobby plan
                                </p>
                              </li>
                              <li className="mt-4 flex items-start">
                                <div className="flex-shrink-0">
                                  <svg
                                    className="h-6 w-6 text-blue-600"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M5 13l4 4L19 7"
                                    ></path>
                                  </svg>
                                </div>
                                <p className="ml-3 text-base leading-6 font-medium text-customBackground-900">
                                  Unlimited playlists
                                </p>
                              </li>
                              <li className="mt-4 flex items-start">
                                <div className="flex-shrink-0">
                                  <svg
                                    className="h-6 w-6 text-blue-600"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M5 13l4 4L19 7"
                                    ></path>
                                  </svg>
                                </div>
                                <p className="ml-3 text-base leading-6 font-medium text-customBackground-900">
                                  Analytics dashboard
                                </p>
                              </li>
                              <li className="mt-4 flex items-start">
                                <div className="flex-shrink-0">
                                  <svg
                                    className="h-6 w-6 text-blue-600"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M5 13l4 4L19 7"
                                    ></path>
                                  </svg>
                                </div>
                                <p className="ml-3 text-base leading-6 font-medium text-customBackground-900">
                                  Weekly/monthly reports
                                </p>
                              </li>
                            </ul>
                            <div className="mt-10">
                              <div className="rounded-lg shadow-md">
                                <a
                                  href="mailto:guillaume.p.lambert@gmail.com"
                                  className="block w-full 
                                  text-center rounded-lg 
                                  bg-customBlue-500 hover:bg-customBlue-700 
                                  px-6 py-4 text-xl 
                                  leading-6 
                                  font-semibold font-display 
                                  text-white 
                                  focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
                                >
                                  Contact us
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-1 lg:col-end-4 lg:row-start-2 lg:row-end-3">
                      <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg">
                        <div className="flex-1 flex flex-col">
                          <div className="bg-white px-6 pt-12 pb-10">
                            <div>
                              <h2 className="mt-2 text-center text-3xl leading-9 font-semibold font-display text-gray-900">
                                Hobby (Free)
                              </h2>
                              <div className="mt-4 flex items-center justify-center font-display">
                                <span className="px-3 flex items-start text-6xl leading-none tracking-tight font-medium text-gray-900">
                                  <span className="mt-2 mr-2 text-4xl">$</span>
                                  <span>0</span>
                                </span>
                                <span className="text-2xl leading-8 font-semibold text-gray-400 tracking-wide">
                                  USD
                                </span>
                              </div>
                            </div>
                          </div>
                          <div
                            className="border-t-2 border-gray-100 rounded-b-lg pt-4 pb-8 px-6 bg-gray-50 sm:px-10 sm:pt-4 sm:pb-10 
                          bg-blue-100 text-sm"
                          >
                            <p className="italic px-8 mt-2 mb-8 text-customBlue-900">
                              Recommended for individuals and music enthusiasts
                            </p>
                            <ul>
                              <li className="flex items-start">
                                <div className="flex-shrink-0">
                                  <svg
                                    className="h-6 w-6 text-blue-600"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M5 13l4 4L19 7"
                                    ></path>
                                  </svg>
                                </div>
                                <p className="ml-3 text-base leading-6 font-medium text-customBackground-900">
                                  1 music provider (Spotify)
                                </p>
                              </li>
                              <li className="mt-4 flex items-start">
                                <div className="flex-shrink-0">
                                  <svg
                                    className="h-6 w-6 text-blue-600"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M5 13l4 4L19 7"
                                    ></path>
                                  </svg>
                                </div>
                                <p className="ml-3 text-base leading-6 font-medium text-customBackground-900">
                                  Create up to 10 playlists
                                </p>
                              </li>
                              <li className="mt-4 flex items-start">
                                <div className="flex-shrink-0">
                                  <svg
                                    className="h-6 w-6 text-blue-600"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M5 13l4 4L19 7"
                                    ></path>
                                  </svg>
                                </div>
                                <p className="ml-3 text-base leading-6 font-medium text-customBackground-900">
                                  Access level 1 metrics
                                </p>
                              </li>
                            </ul>
                            <div className="mt-8">
                              <div
                                className="rounded-lg shadow-md block w-full text-center 
                              rounded-lg bg-white px-6 py-3 text-base leading-6 
                              font-semibold font-display 
                              text-blue-500 hover:text-blue-600 focus:outline-none focus:shadow-outline transition ease-in-out duration-150
                              cursor-pointer"
                                onClick={this.redirectToSpotifySignin}
                              >
                                Get started
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-8 lg:col-end-11 lg:row-start-2 lg:row-end-3">
                      <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg">
                        <div className="flex-1 flex flex-col">
                          <div className="bg-white px-6 pt-12 pb-10">
                            <div>
                              <h2 className="mt-2 text-center text-3xl leading-9 font-semibold font-display text-gray-900">
                                Professional
                              </h2>
                              <div className="mt-4 flex items-center justify-center font-display">
                                <span className="px-3 flex items-start text-6xl leading-none tracking-tight font-medium text-gray-900">
                                  <span className="mt-2 mr-2 text-4xl">$</span>
                                  <span>30</span>
                                </span>
                                <span className="text-2xl leading-8 font-semibold text-gray-400 tracking-wide">
                                  USD
                                </span>
                              </div>
                            </div>
                          </div>
                          <div
                            className="border-t-2 border-gray-100 rounded-b-lg pt-4 pb-8 px-6 bg-gray-50 sm:px-10 sm:pt-4 sm:pb-10 
                          bg-blue-100 text-sm"
                          >
                            <p className="italic px-8 mt-2 mb-8 text-customBlue-900">
                              Recommended for festival managers and music producers
                            </p>
                            <ul>
                              <li className="flex items-start">
                                <div className="flex-shrink-0">
                                  <svg
                                    className="h-6 w-6 text-blue-600"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M5 13l4 4L19 7"
                                    ></path>
                                  </svg>
                                </div>
                                <p className="ml-3 text-base leading-6 font-medium text-customBackground-900">
                                  Up to 3 music providers
                                </p>
                              </li>
                              <li className="mt-4 flex items-start">
                                <div className="flex-shrink-0">
                                  <svg
                                    className="h-6 w-6 text-blue-600"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M5 13l4 4L19 7"
                                    ></path>
                                  </svg>
                                </div>
                                <p className="ml-3 text-base leading-6 font-medium text-customBackground-900">
                                  Access to beta features
                                </p>
                              </li>
                              <li className="mt-4 flex items-start">
                                <div className="flex-shrink-0">
                                  <svg
                                    className="h-6 w-6 text-blue-600"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M5 13l4 4L19 7"
                                    ></path>
                                  </svg>
                                </div>
                                <p className="ml-3 text-base leading-6 font-medium text-customBackground-900">
                                  Support
                                </p>
                              </li>
                            </ul>
                            <div className="mt-8">
                              <div className="rounded-lg shadow-md">
                                <a
                                  href="mailto:guillaume.p.lambert@gmail.com"
                                  className="block w-full text-center rounded-lg 
                                  bg-white px-6 py-3 text-base leading-6 
                                  font-semibold font-display 
                                  text-blue-500 hover:text-blue-600 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Contact us
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h4 className="text-xl lg:text-2xl text-blue-100 mt-6 mb-6 tracking-wider">
            Give Playlish a try, it's free!
          </h4>
          <div className="container flex flex-row items-center justify-center">
            <button
              // className="bg-transparent hover:bg-blue-500 text-blue-100 font-semibold py-2 px-8 border border-solid border-blue-100 hover:border-transparent uppercase rounded-xl flex flex-row items-center justify-center"
              className="bg-customBlue-500 hover:bg-customBlue-700 text-blue-100 font-semibold py-2 px-8 border border-solid border-transparent uppercase rounded-xl flex flex-row items-center justify-center"
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
                  rel="noopener noreferrer"
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
