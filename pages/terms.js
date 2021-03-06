import React from 'react';
import { compose } from 'recompose';
import connectApollo from '../lib/connectApollo';
import withRegion from '../lib/withRegion';
import connectI18n from '../lib/connectI18n';
import PageLayout from '../components/PageLayout';

const Terms = ({ terms }) => (
  <PageLayout title={terms.title}>
    <div className="wrap wrap--narrow wrap--vertical-padding">
      <h1>
        {terms.title}
      </h1>
      <div
        dangerouslySetInnerHTML={{ // eslint-disable-line
          __html: terms.text,
        }}
      />
    </div>
  </PageLayout>
);

export default connectApollo(compose(
  connectI18n,
  withRegion('terms'),
)(Terms));
