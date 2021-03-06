import React from 'react';
import { withRouter } from 'next/router';
import { injectIntl } from 'react-intl';
import { compose, withProps, pure } from 'recompose';
import withCheckoutCart from '../lib/withCheckoutCart';
import withLoadingComponent from '../lib/withLoadingComponent';
import CheckoutCart from './CheckoutCart';
import CheckoutProcess from './CheckoutProcess';

const Checkout = ({ readyForCheckout, cartEmpty }) => (
  <div className="checkout animated fadeIn">
    <CheckoutCart cartEmpty={cartEmpty} />
    <CheckoutProcess readyForCheckout={readyForCheckout} cartEmpty={cartEmpty} />
    <style jsx>
      {`
        @media (min-width: 1024px) {
          .checkout {
            display: flex;
            flex-direction: row-reverse;
          }
        }
        .free-shipping-on-top {
          margin-bottom: .5em;
        }

        .free-shipping-on-top h2 {
          display: inline-block;
          font-size: 16px;
        }

        .free-shipping-on-top img {
          display: inline-block;
          width: 20px;
          margin-right: .5em;
          vertical-align: middle;
        }

      `}
    </style>
  </div>
);

export default compose(
  injectIntl,
  withRouter,
  withCheckoutCart,
  withLoadingComponent,
  withProps(({ cart }) => {
    const { address, contact = {} } = cart;
    return {
      readyForCheckout: !(!contact || !contact.emailAddress || !address || !address.city),
      cartEmpty: !cart || !cart._id,
    };
  }),
  pure,
)(Checkout);
