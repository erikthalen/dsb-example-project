import './index.scss'

/**
 * Get every custom element and define them
 */
import * as dsb from '@dsb.dk/designsystem/dist/js/dsb.esm.js'
Object.values(dsb).forEach(module => typeof module === 'function' && module())

/**
 * Get single custom element and define it
 */
// import { defineExpandCollapse } from '@dsb.dk/designsystem/dist/js/dsb.esm.js'
// defineExpandCollapse()
