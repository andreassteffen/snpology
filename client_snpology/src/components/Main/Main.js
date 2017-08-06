import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Search from '../Search'
import SNP from '../SNP'
import Gene from '../Gene'


export const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Search}/>
      <Route path='/snp_analyze' component={SNP}/>
      <Route path='/gene_analyze' component={Gene}/>
    </Switch>
  </main>
)