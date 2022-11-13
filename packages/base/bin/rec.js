#!/usr/bin/env node

import { program } from 'commander'
import getPkg from '#utils/pkg.js'
import create from '#lib/create.js'

program
    .version(getPkg('version'))
    .command('create')
    .description('start create eslint prettier flow')
    .action(create)

program.parse()
