import React from 'react';
import Link from 'next/link';
import { compose } from 'recompose';
import variables from '../styles/variables';
import connectApollo from '../lib/connectApollo';
import withRegion from '../lib/withRegion';
import connectI18n from '../lib/connectI18n';
import PageLayout from '../components/PageLayout';

const Platform = ({ platform }) => (
  <PageLayout title={platform.meta_title} metaDescription={platform.meta_description}>

    <div className="wrap wrap--vertical-padding">
      <div className="button-group mt0 mb3">
        <Link href="/engine">
          <a className="button">Engine</a>
        </Link>
        <Link href="/control-panel">
          <a className="button">Control Panel</a>
        </Link>
        <Link href="/consulting">
          <a className="button">Consulting</a>
        </Link>
        <Link href="/managed-hosting">
          <a className="button">Managed Hosting</a>
        </Link>
      </div>
      <section className="section">
        <div className="text-center">
          <img className="undraw" src="../static/img/undraw_server_status_5pbv.svg" alt="server status" />
          <h1>
          Unchained Engine
          </h1>
        </div>
        <div>
          <p>
              The Unchained Engine is our core product and is written in Node.js ES6.
              It exposes all data exclusively through a GraphQL API (headless). The web
              application is served stateless and therefore container friendly.
          </p>
        </div>
        <h2 className="text-center">
          Core Values
        </h2>
        <div className="flex-between">
          <div className="w-lg-50 card">
            <h3>
            Open Source
            </h3>
            <p>
            Usage of OSS prevents vendor lock-in. Using software that is open to
            the public leads to communities that help each other, the software is
            resilient to economic issues like bankruptcy of the software owner.
            </p>
          </div>
          <div className="w-lg-50 card">
            <h3>
              Headless & Hackable
            </h3>
            <p>
              Non-hackable software (like SaaS) use the technique of &quot;customizing&quot;,
              meaning they provide a massive control panel where every aspect of the
              software can be configured, themed or disabled.
              Sadly there is always something that needs some extra development work
              and people need to hire somebody to create a plugin.
              In Unchained Engine, the software flow is changed through code and not through UI.
              This means a software developer is always required to configure the platform.
               It&apos;s called &quot;hackable&quot; software and allows to configure even parts of
               the software that were not intended to get configured by the core developers.
            </p>
          </div>
        </div>
        <div>
          <h2>
          Stack in detail
          </h2>
          <div className="flex-between">
            <h3>
            Node.js ES6
            </h3>
            <p>
            We use the most popular programming language in the web because we think
            it&quot;s key for a hackable software. If you have a hackable software but no coder,
            what&quot;s the point then? As the project manager
            you&quot;ll propably always find somebody that can program in Javascript, while
            finding people that code in GoLang are rare. To increase the stability
            and longevity of our stack we further have selected Meteor.js as the build tool.
            </p>

            <h3>
            MongoDB
            </h3>
            <p>
            We&quot;ve chosen MongoDB because it is the most popular NoSQL DBMS out there.
            With a schema-less database, development of plugins and extensions
            that need to extend the existing data structure are much easier to develop.
              <a href="/faq">
              More infos about why Meteor.js or MongoDB you can find in our FAQ
              </a>
            </p>

            <h3>
            Apollo GraphQL Server
            </h3>
            <p>
            GraphQL is the new REST. Having a schema on the API helps with connecting systems
            in a micro-service architecture and makes it extremely easy to implement in client apps
            for all kind of operating systems and programming languages.
            </p>

            <h3>
          Software Modules
            </h3>
            <svg width="783px" height="630px" viewBox="0 0 783 630" version="1.1">
              <defs />
              <g id="Modules" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Unchained-Keynote-Canvas" transform="translate(-112.000000, -37.000000)">
                  <g id="Group" transform="translate(112.000000, 37.000000)">
                    <rect id="Rectangle-2" stroke="#C9C9C9" fillOpacity="0.257869112" fill="#535fd7" x="0.5" y="132.5" width="782" height="497" />
                    <rect id="Rectangle" stroke="#C9C9C9" fill="#E9F4FA" x="16.5" y="202.5" width="150" height="93" />
                    <text id="Products" fontFamily="GillSans, Gill Sans" fontSize="21" fontWeight="normal" fill="#181616">
                      <tspan x="54" y="254">
                    Products
                      </tspan>
                    </text>
                    <rect id="Rectangle" stroke="#C9C9C9" fill="#E9F4FA" x="166.5" y="202.5" width="150" height="93" />
                    <rect id="Rectangle" stroke="#C9C9C9" fill="#E9F4FA" x="16.5" y="295.5" width="150" height="93" />
                    <rect id="Rectangle" stroke="#C9C9C9" fill="#FFFFFF" x="16.5" y="154.5" width="750" height="47" />
                    <text id="Products" fontFamily="GillSans, Gill Sans" fontSize="21" fontWeight="normal" fill="#181616">
                      <tspan x="54" y="254">
                    Products
                      </tspan>
                    </text>
                    <rect id="Rectangle-Copy-3" stroke="#C9C9C9" fill="#E9F4FA" x="316.5" y="295.5" width="150" height="93" />
                    <rect id="Rectangle" stroke="#C9C9C9" fill="#98A244" x="207.5" y="360.5" width="23" height="23" />
                    <rect id="Rectangle" stroke="#C9C9C9" fill="#98A244" x="238.5" y="360.5" width="23" height="23" />
                    <rect id="Rectangle" stroke="#C9C9C9" fill="#98A244" x="174.5" y="360.5" width="23" height="23" />
                    <rect id="Rectangle-Copy" stroke="#C9C9C9" fill="#E9F4FA" x="316.5" y="202.5" width="150" height="93" />
                    <rect id="Rectangle" stroke="#C9C9C9" fill="#f3d299" x="356.5" y="266.5" width="23" height="23" />
                    <rect id="Rectangle" stroke="#C9C9C9" fill="#98A244" x="323.5" y="266.5" width="23" height="23" />
                    <rect id="Rectangle" stroke="#C9C9C9" fill="#f3d299" x="387.5" y="266.5" width="23" height="23" />
                    <rect id="Rectangle-Copy-2" stroke="#C9C9C9" fill="#E9F4FA" x="166.5" y="295.5" width="150" height="93" />
                    <rect id="Rectangle-Copy-3" stroke="#C9C9C9" fill="#E9F4FA" x="466.5" y="295.5" width="150" height="93" />
                    <rect id="Rectangle" stroke="#C9C9C9" fill="#f3d299" x="474.5" y="360.5" width="23" height="23" />
                    <rect id="Rectangle-Copy-3" stroke="#C9C9C9" fill="#E9F4FA" x="466.5" y="202.5" width="150" height="93" />
                    <text id="Core-SDK-+-API" fontFamily="GillSans, Gill Sans" fontSize="21" fontWeight="normal" fill="#181616">
                      <tspan x="321" y="183">
                    Core SDK + API
                      </tspan>
                    </text>
                    <text id="Core" fontFamily="GillSans, Gill Sans" fontSize="21" fontWeight="normal" fill="#181616">
                      <tspan x="53" y="51">
                    Core
                      </tspan>
                    </text>
                    <text id="Payment" fontFamily="GillSans, Gill Sans" fontSize="21" fontWeight="normal" fill="#181616">
                      <tspan x="356" y="256">
                    Payment
                      </tspan>
                    </text>
                    <text id="Orders" fontFamily="GillSans, Gill Sans" fontSize="21" fontWeight="normal" fill="#181616">
                      <tspan x="210" y="256">
                    Orders
                      </tspan>
                    </text>
                    <text id="Delivery" fontFamily="GillSans, Gill Sans" fontSize="21" fontWeight="normal" fill="#181616">
                      <tspan x="56" y="349">
                    Delivery
                      </tspan>
                    </text>
                    <text id="Pricing" fontFamily="GillSans, Gill Sans" fontSize="21" fontWeight="normal" fill="#181616">
                      <tspan x="213" y="349">
Pricing
                      </tspan>
                    </text>
                    <text id="Discounts" fontFamily="GillSans, Gill Sans" fontSize="21" fontWeight="normal" fill="#181616">
                      <tspan x="349" y="349">
Discounts
                      </tspan>
                    </text>
                    <text id="Documents" fontFamily="GillSans, Gill Sans" fontSize="21" fontWeight="normal" fill="#181616">
                      <tspan x="492" y="349">
Documents
                      </tspan>
                    </text>
                    <text id="Messaging" fontFamily="GillSans, Gill Sans" fontSize="21" fontWeight="normal" fill="#181616">
                      <tspan x="499" y="256">
Messaging
                      </tspan>
                    </text>
                    <rect id="Rectangle" stroke="#C9C9C9" fill="#E9F4FA" x="16.5" y="32.5" width="23" height="23" />
                    <text id="Plugins" fontFamily="GillSans, Gill Sans" fontSize="21" fontWeight="normal" fill="#181616">
                      <tspan x="53" y="85">
Plugins
                      </tspan>
                    </text>
                    <rect id="Rectangle" stroke="#C9C9C9" fill="#f3d299" x="16.5" y="66.5" width="23" height="23" />
                    <text id="Extensions" fontFamily="GillSans, Gill Sans" fontSize="21" fontWeight="normal" fill="#181616">
                      <tspan x="53" y="119">
Extensions
                      </tspan>
                    </text>
                    <rect id="Rectangle" stroke="#C9C9C9" fill="#1E7CFB" x="16.5" y="100.5" width="23" height="23" />
                    <rect id="Rectangle" stroke="#C9C9C9" fill="#f3d299" x="22.5" y="360.5" width="23" height="23" />
                    <rect id="Rectangle" stroke="#C9C9C9" fill="#f3d299" x="54.5" y="360.5" width="23" height="23" />
                    <rect id="Rectangle" stroke="#C9C9C9" fill="#f3d299" x="323.5" y="266.5" width="23" height="23" />
                    <rect id="Rectangle" stroke="#C9C9C9" fill="#f3d299" x="207.5" y="360.5" width="23" height="23" />
                    <rect id="Rectangle" stroke="#C9C9C9" fill="#f3d299" x="324.5" y="360.5" width="23" height="23" />
                    <rect id="Rectangle" stroke="#C9C9C9" fill="#f3d299" x="174.5" y="360.5" width="23" height="23" />
                    <rect id="Rectangle" stroke="#C9C9C9" fill="#f3d299" x="474.5" y="266.5" width="23" height="23" />
                    <rect id="Rectangle-Copy-3" stroke="#C9C9C9" fill="#E9F4FA" x="616.5" y="295.5" width="150" height="93" />
                    <text id="Warehousing" fontFamily="GillSans, Gill Sans" fontSize="21" fontWeight="normal" fill="#181616">
                      <tspan x="635" y="349">
Warehousing
                      </tspan>
                    </text>
                    <rect id="Rectangle" stroke="#C9C9C9" fill="#f3d299" x="623.5" y="360.5" width="23" height="23" />
                    <rect id="Rectangle" stroke="#C9C9C9" fill="#E9F4FA" x="16.5" y="388.5" width="150" height="93" />
                    <rect id="Rectangle-Copy-3" stroke="#C9C9C9" fill="#E9F4FA" x="316.5" y="388.5" width="150" height="93" />
                    <rect id="Rectangle" stroke="#C9C9C9" fill="#98A244" x="207.5" y="453.5" width="23" height="23" />
                    <rect id="Rectangle" stroke="#C9C9C9" fill="#98A244" x="238.5" y="453.5" width="23" height="23" />
                    <rect id="Rectangle" stroke="#C9C9C9" fill="#98A244" x="174.5" y="453.5" width="23" height="23" />
                    <rect id="Rectangle-Copy-2" stroke="#C9C9C9" fill="#E9F4FA" x="166.5" y="388.5" width="150" height="93" />
                    <rect id="Rectangle-Copy-3" stroke="#C9C9C9" fill="#E9F4FA" x="466.5" y="388.5" width="150" height="93" />
                    <rect id="Rectangle" stroke="#C9C9C9" fill="#f3d299" x="474.5" y="453.5" width="23" height="23" />
                    <rect id="Rectangle" stroke="#C9C9C9" fill="#f3d299" x="506.5" y="453.5" width="23" height="23" />
                    <text id="Currencies" fontFamily="GillSans, Gill Sans" fontSize="21" fontWeight="normal" fill="#181616">
                      <tspan x="46" y="442">
Currencies
                      </tspan>
                    </text>
                    <text id="Countries" fontFamily="GillSans, Gill Sans" fontSize="21" fontWeight="normal" fill="#181616">
                      <tspan x="200" y="440">
Countries
                      </tspan>
                    </text>
                    <text id="Languages" fontFamily="GillSans, Gill Sans" fontSize="21" fontWeight="normal" fill="#181616">
                      <tspan x="349" y="442">
Languages
                      </tspan>
                    </text>
                    <text id="Users" fontFamily="GillSans, Gill Sans" fontSize="21" fontWeight="normal" fill="#181616">
                      <tspan x="518" y="442">
Users
                      </tspan>
                    </text>
                    <rect id="Rectangle-Copy-3" stroke="#C9C9C9" fill="#E9F4FA" x="616.5" y="388.5" width="150" height="93" />
                    <text id="Roles" fontFamily="GillSans, Gill Sans" fontSize="21" fontWeight="normal" fill="#181616">
                      <tspan x="665" y="442">
Roles
                      </tspan>
                    </text>
                    <rect id="Rectangle-Copy-3" stroke="#C9C9C9" fill="#E9F4FA" x="616.5" y="202.5" width="150" height="93" />
                    <rect id="Rectangle" stroke="#C9C9C9" fill="#f3d299" x="625.5" y="266.5" width="23" height="23" />
                    <text id="Assortments" fontFamily="GillSans, Gill Sans" fontSize="21" fontWeight="normal" fill="#181616">
                      <tspan x="637" y="256">
Assortments
                      </tspan>
                    </text>
                    <rect id="Rectangle" stroke="#C9C9C9" fill="#1E7CFB" x="16.5" y="520.5" width="169" height="93" />
                    <rect id="Rectangle" stroke="#C9C9C9" fill="#1E7CFB" x="198.5" y="520.5" width="158" height="93" />
                    <text id="Example:-Car-Configu" fontFamily="GillSans, Gill Sans" fontSize="21" fontWeight="normal" fill="#FFFFFF">
                      <tspan x="63.0910645" y="562">
Example:
                        {' '}
                      </tspan>
                      <tspan x="25.4643555" y="586">
Car Configurator
                      </tspan>
                    </text>
                    <text id="Example:-Risk-Calcul" fontFamily="GillSans, Gill Sans" fontSize="21" fontWeight="normal" fill="#FFFFFF">
                      <tspan x="236.040039" y="562">
Example:
                      </tspan>
                      <tspan x="209.072266" y="586">
Risk Calculator
                      </tspan>
                    </text>
                    <text id="Your-application-bas" fontFamily="GillSans, Gill Sans" fontSize="21" fontWeight="normal" fill="#181616">
                      <tspan x="380" y="609">
Your application based on Unchained Engine
                      </tspan>
                    </text>
                    <text id="Kernel" fontFamily="GillSans, Gill Sans" fontSize="21" fontWeight="normal" fill="#181616">
                      <tspan x="53" y="19">
Kernel
                      </tspan>
                    </text>
                    <rect id="Rectangle" stroke="#C9C9C9" fill="#FFFFFF" x="16.5" y="0.5" width="23" height="23" />
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </section>

      <section className="section">

        <div>
          <h2>
Features by module
          </h2>
          <div className="features">
            <div className="feature-set">
              <div className="flex">
                <img className="feature-set__icon" src="../static/img/07- container-package-logistic-truck.svg" alt="" />
                <h3>
  Delivery
                </h3>
              </div>
              <ul>
                <li>
  Downloadable Products
                </li>
                <li>
  E-Mail the order to a third-party logistics provider&apos;s central inbox
                </li>
                <li>
  Upload orders as CSV to a FTP host*
                </li>
                <li>
  Transfer orders electronically to any other system
                </li>
                <li>
  Post (Yellowcube), UPS, DHL Comissioning*
                </li>
              </ul>
            </div>

            <div className="feature-set">
              <div className="flex">
                <img className="feature-set__icon" src="../static/img/65- cloud-server-document-sync.svg" alt="" />
                <h3>
  Documents
                </h3>
              </div>
              <ul>
                <li>
  Generate Documents&apos;s through a local bookkeeping system
                  (SAP R/3, Abacus, ...)
                </li>
                <li>
  Generate Documents&apos;s with HTML Templates
                </li>
                <li>
  Generate Documents&apos;s through SaaS services (Smallinvoice for ex.)
                </li>
                <li>
  Generate a new XML file for external processing
                </li>
              </ul>
            </div>

            <div className="feature-set">
              <div className="flex">
                <img className="feature-set__icon" src="../static/img/14- iphone-message-notification.svg" alt="" />
                <h3>
  Messaging
                </h3>
              </div>
              <ul>
                <li>
  Send Order Confirmations and Invoices by E-Mail, SMS or Whatsapp
                </li>
                <li>
  Send User Registration Notifications via Slack
                </li>
                <li>
  Twitter new orders anonymized*
                </li>
              </ul>
            </div>

            <div className="feature-set">
              <div className="flex">
                <img className="feature-set__icon" src="../static/img/01- currency-money-hand-1.svg" alt="" />

                <h3>
                  Payments
                </h3>
              </div>
              <ul>
                <li>
                  Invoice (Post- and prepaid)
                </li>
                <li>
                  Stripe
                </li>
                <li>
                  PostFinance
                </li>
                <li>
                  PayPal
                </li>
                <li>
                 Datatrans
                </li>
                <li>
                  Bonity-checked invoices (Deltavista)
                </li>
              </ul>
            </div>

            <div className="feature-set">
              <div className="flex">
                <img className="feature-set__icon" src="../static/img/09- price-tag.svg" alt="" />
                <h3>
                  Pricing
                </h3>
              </div>
              <ul>
                <li>
                  B2B Users special price
                </li>
                <li>
                  Date range dependent special prices
                </li>
                <li>
                  Dynamic tax rate retrieval
                </li>
                <li>
                  Product, Payment, Order or Delivery prices confiurable
                </li>
                <li>
                  Weather-dependent barbeque sausage price*
                </li>
                <li>
                  Order total weight dependent charges, dynamically calculated by UPS*
                </li>
                <li>
                  Prices that depend on Languages, countries, users, order quantities, ...*
                </li>
              </ul>
            </div>

            <div className="feature-set">
              <div className="flex">

                <img className="feature-set__icon" src="../static/img/06- shopping-bag-money.svg" alt="" />
                <h3>
                  Discounts
                </h3>
              </div>
              <ul>
                <li>
                  Christmas & Black Friday Discounts
                </li>
                <li>
                  Percentage reducing discount codes
                </li>
                <li>
                  Absolute amount reducing discount codes
                </li>
                <li>
                  Swear word dependent daily discounts based on Donald Trump Twitter feed*
                </li>
                <li>
                  Lottery or random prices: Every 1000th buyer gets the stuff free of charge*
                </li>
              </ul>
            </div>

            <div className="feature-set">
              <div className="flex">
                <img className="feature-set__icon" src="../static/img/05- warehouse-shelf-lift-truck.svg" alt="" />
                <h3>
                  Warehousing
                </h3>
              </div>
              <ul>
                <li>
                  ERP as Inventory Management*
                </li>
                <li>
                  Manage Inventory in Google Docs
                </li>
                <li>
                  Fire Just-in-time Production of any goods*
                </li>
                <li>
                  Real-time quantities (see an event get sold out live)*
                </li>
              </ul>
            </div>

            <div className="feature-set">
              <div className="flex">
                <img className="feature-set__icon" src="../static/img/32- work-laptop-male-african-american-1.svg" alt="" />
                <h3>
                  Quotations
                </h3>
              </div>
              <ul>
                <li>
                  Automatically build individual offers in response to RFPs
                </li>
                <li>
                  Quotation workflow to confirm and reject offers
                </li>
                <li>
                  Allow users to digitally negotiate with the vendor
                </li>
              </ul>
            </div>

            <div className="feature-set">
              <div className="flex">
                <img className="feature-set__icon" src="../static/img/02- hand-thumbs-up-like.svg" alt="" />
                <h3>
                  Product Reviews
                </h3>
              </div>
              <ul>
                <li>
                  Allow users to comment on ordered products
                </li>
                <li>
                  Allow users to rate a product
                </li>
                <li>
                  Allow users to post custom data and/or reply to others messages
                </li>
                <li>
                  Intelligent Workflow that allows to scan
                  incomming reviews and controls the obligation for manual approvement.
                </li>
              </ul>
            </div>

            <div className="feature-set">
              <div className="flex">
                <img className="feature-set__icon" src="../static/img/31- programming-search-for-setting.svg" alt="" />
                <h3>
                  Faceted Search
                </h3>
              </div>
              <ul>
                <li>
                  Filters on any hierarchical level
                </li>
                <li>
                  Filters that get filtered by filters (Faceted)
                </li>
                <li>
                  Range, Selection and custom Filter types
                </li>
                <li>
                  Fast (custom index)
                </li>
                <li>
                  Item count prediction
                </li>
              </ul>
            </div>

            <div className="feature-set">
              <div className="flex">
                <img className="feature-set__icon" src="../static/img/08- java-script-developer.svg" alt="" />
                <h3>
                  And so much more
                </h3>
              </div>
              <ul>
                <li>
                  One shop for one world (Multi-country support)
                </li>
                <li>
                  Price your products in any currency you like. $XLM maybe?
                </li>
                <li>
                  Multi-language support
                </li>
                <li>
                  Metadata extension on any entity easily possible
                </li>
              </ul>
            </div>
          </div>

          <small className="mt3 db">
* Examples of crazy plugins possible,
built during projects. The plugins usually take only hours to develop.
          </small>
        </div>
      </section>
      <Link href="/platform">
        <div className="text-center">
          <a className="button mt3">
              Back to Platform overview
          </a>
        </div>
      </Link>
    </div>

    <style jsx>
      {`
      .advantages {
        padding-bottom: 2em;
      }
      @media (min-width: 768px) {
        .advantages {
          display: flex;
        }
        .advantage {
          display: flex;
          justify-content: space-between;
        }
      }


      .advantage {
        margin-top: 2.5em;
        padding: 2em 1.5em;
        background-image: linear-gradient(to top left, ${variables.grayColor}, white);
        background-size: 100%;
        background-repeat: no-repeat;
        width: 100%;
        height: 90%;
        box-shadow: 0 2px 8px rgba(0,0,0,.05), 0 4px 14px rgba(0,0,0,.1);
      }

      .advantage h2 {
        margin-top: 0;
        margin-bottom: 0;
      }

      .advantage h3 {
        margin-top: 0;
      }


      .advantage p {
        margin-top: .25em;
        margin-bottom: 0;
      }

      .advantage-img {
        width: 120px;
        height: 120px;
        margin-right: .5em;
      }

      @media (min-width: 768px) {
        .advantage p {
          max-width: 80%;
        }
      }
    `}
    </style>

  </PageLayout>
);


export default connectApollo(compose(
  connectI18n,
  withRegion('platform'),
)(Platform));
