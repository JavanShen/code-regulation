#!/usr/bin/env node

import { program } from 'commander'
import getPkg from '../lib/utils/pkg.js'
import create from '../lib/create.js'

program
    .version(getPkg('version') as string)
    .command('create')
    .description('start create eslint prettier flow more')
    .action(create)

program.parse()
