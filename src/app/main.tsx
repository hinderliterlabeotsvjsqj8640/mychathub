import Plausible from 'plausible-tracker'
import { RouterProvider } from '@tanstack/react-router'
import { createRoot } from 'react-dom/client'
import '../base.css'
import { router } from './router'

const container = document.getElementById('app')!
const root = createRoot(container)
root.render(<RouterProvider router={router} />)

const plausible = Plausible({ domain: 'chathub.gg', hashMode: true })
plausible.enableAutoPageviews()