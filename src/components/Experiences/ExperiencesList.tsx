import { FC } from 'react'
import { View } from 'react-native'
import { ExperienceItemForm } from './ExperienceItemForm'
import { ExperienceFormData } from './types'

interface Props {
    items: ExperienceFormData[]
    onItemChange: (index: number, field: keyof ExperienceFormData, value: string) => void
}

export const ExperiencesList: FC<Props> = ({ items, onItemChange }) => {
    return (
        <View>
            {items.map((item, index) => (
                <ExperienceItemForm
                    key={index}
                    value={item}
                    index={index}
                    onChange={onItemChange}
                />
            ))}
        </View>
    )
}
