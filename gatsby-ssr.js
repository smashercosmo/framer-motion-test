const React = require('react')

const { Layout } = require('./src/components/Layout/Layout')

export function wrapPageElement({ element }) {
  return (
    <Layout>{element}</Layout>
  )
}
