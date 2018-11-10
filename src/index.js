import React from 'react'
import {render} from 'react-dom'
import 'gestalt/dist/gestalt.css';

import './css/main.css'
import Main from './views/Main'

const root = document.querySelector('main')

render(<Main/>, root)
