import { compose, mapProps } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export default compose(
  graphql(gql`
    query getProduct($productId: ID, $slug: String) {
      product(productId: $productId, slug: $slug) {
        _id
        tags
        texts {
          _id
          title
          subtitle
          description
          vendor
          labels
        }
        ... on SimpleProduct {
          media {
            _id
            file {
              _id
              url
            }
            texts {
              _id
              title
            }
          }
          catalogPrice {
            _id
            isTaxable
            isNetPrice
            price {
              amount
              currency
            }
          }
          simulatedPrice {
            _id
            isTaxable
            isNetPrice
            price {
              amount
              currency
            }
          }
        }
      }
    }
  `),
  mapProps(({ data: { product, loading }, loading: loadingPredecessor = false, ...rest }) => ({
    product: product || {},
    loading: !product && (loading || loadingPredecessor),
    ...rest,
  })),
);
