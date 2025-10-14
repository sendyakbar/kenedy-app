import { FC } from 'react'
import { View } from 'react-native'
import { ExperienceItemForm } from './ExperienceItemForm'
import { ExperienceFormData } from './types'

interface Props {
    items: ExperienceFormData[]
    onItemChange: (index: number, field: keyof ExperienceFormData, value: string) => void
    onItemRemove?: (index: number) => void
}

export const ExperiencesList: FC<Props> = ({ items, onItemChange, onItemRemove }) => {
    return (
        <View>
            {items.map((item, index) => (
                <ExperienceItemForm
                    key={index}
                    value={item}
                    index={index}
                    onChange={onItemChange}
                    onRemove={onItemRemove}
                />
            ))}
        </View>
    )
}
