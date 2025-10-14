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

    it('renders Remove buttons when onItemRemove is provided and calls with index', () => {
        const items = [makeItem({ title: 'A' }), makeItem({ title: 'B' })]
        const onItemRemove = jest.fn()
        const { getAllByText } = render(
            <ExperiencesList items={items} onItemChange={() => {}} onItemRemove={onItemRemove} />
        )

        const removeButtons = getAllByText('Remove')
        expect(removeButtons.length).toBe(2)

        // Press the second remove button (index 1)
        fireEvent.press(removeButtons[1])
        expect(onItemRemove).toHaveBeenCalledWith(1)
    })
})
