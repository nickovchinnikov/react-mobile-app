//@flow

import type { StatelessFunctionalComponent } from 'react'

export type keyValueType = { [string]: string }

export type reactComponentType = StatelessFunctionalComponent<any>

export type reactComponentsArrayType = Array<reactComponentType>
