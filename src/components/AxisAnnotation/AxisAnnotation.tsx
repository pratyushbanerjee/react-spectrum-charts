/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';

import { DEFAULT_AXIS_ANNOTATION_COLOR, DEFAULT_AXIS_ANNOTATION_OFFSET } from '@constants';

import { AxisAnnotationProps } from '../../types';

const AxisAnnotation: FC<AxisAnnotationProps> = ({
	dataKey = 'annotations',
	color = DEFAULT_AXIS_ANNOTATION_COLOR,
	offset = DEFAULT_AXIS_ANNOTATION_OFFSET,
}) => {
	return null;
};

// displayName is used to validate the component type in the spec builder
AxisAnnotation.displayName = 'AxisAnnotation';

export { AxisAnnotation };
