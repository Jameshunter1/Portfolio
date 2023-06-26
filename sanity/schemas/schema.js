// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas

import skill from "./skill"
import pageInfo from './pageInfo'
import social from "./social"
import developmentproject from "./developmentproject"
import analysisproject from "./analysisproject"



export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    pageInfo, skill, developmentproject, analysisproject, social
  ]),
})
