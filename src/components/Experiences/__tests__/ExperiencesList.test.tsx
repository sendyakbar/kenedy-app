import React from 'react'
import { render } from '@testing-library/react-native'
import { ExperiencesList } from '../ExperiencesList'
import type { ExperienceFormData } from '../types'

const makeItem = (overrides: Partial<ExperienceFormData> = {}): ExperienceFormData => ({
    title: '',
    company: '',
    duration: '',
    description: '',
    ...overrides,
})

describe('ExperiencesList', () => {
    it('renders a list of ExperienceItemForm entries', () => {
        const items = [makeItem({ title: 'A' }), makeItem({ title: 'B' }), makeItem({ title: 'C' })]
        const { getAllByText } = render(
            <ExperiencesList items={items} onItemChange={() => {}} />
        )

        // Labels appear for each item
        const titles = getAllByText('Title')
        expect(titles.length).toBe(3)
    })
})
