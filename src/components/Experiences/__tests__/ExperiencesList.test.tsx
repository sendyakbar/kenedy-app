import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
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

        const titles = getAllByText('Title')
        expect(titles.length).toBe(3)
    })

    it('shows Remove buttons only for items after index 0 and calls with correct index', () => {
        const items = [makeItem({ title: 'A' }), makeItem({ title: 'B' }), makeItem({ title: 'C' })]
        const onItemRemove = jest.fn()
        const { queryAllByText, getAllByText } = render(
            <ExperiencesList items={items} onItemChange={() => {}} onItemRemove={onItemRemove} />
        )

        // First item should not have Remove; others should
        const removeButtons = queryAllByText('Remove')
        expect(removeButtons.length).toBe(2)

        // Press the second item's remove (index 1)
        fireEvent.press(getAllByText('Remove')[0])
        expect(onItemRemove).toHaveBeenCalledWith(1)
    })
})
