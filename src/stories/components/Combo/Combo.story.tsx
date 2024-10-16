/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
import { ReactElement } from 'react';

import useChartProps from '@hooks/useChartProps';
import { Axis, Bar, Chart, ChartTooltip, Line } from '@rsc';
import { Combo } from '@rsc/alpha';
import { peopleAdoptionComboData, peopleTotalComboData } from '@stories/data/data';
import { StoryFn } from '@storybook/react';
import { bindWithProps } from '@test-utils';

import { ChartProps } from '../../../types';

export default {
	title: 'RSC/Combo (alpha)',
	component: Combo,
};

const defaultChartProps: ChartProps = {
	data: peopleAdoptionComboData,
	minWidth: 400,
	maxWidth: 800,
	height: 400,
};

const BasicComboStory: StoryFn<typeof Combo> = (args): ReactElement => {
	const chartProps = useChartProps(defaultChartProps);
	return (
		<Chart {...chartProps}>
			<Axis position="left" title="People" grid />
			<Axis position="right" name="adoption" title="Adoption Rate" />
			<Axis position="bottom" labelFormat="time" baseline ticks />
			<Combo {...args}>
				<Bar metric="people" />
				<Line metric="adoptionRate" metricAxis="adoption" color={{ value: 'indigo-900' }} scaleType="point" />
			</Combo>
		</Chart>
	);
};

const TooltipStory: StoryFn<typeof Combo> = (args): ReactElement => {
	const chartProps = useChartProps(defaultChartProps);
	return (
		<Chart {...chartProps}>
			<Axis position="left" title="People" grid />
			<Axis position="right" name="adoption" title="Adoption Rate" />
			<Axis position="bottom" labelFormat="time" baseline ticks />
			<Combo {...args}>
				<Bar metric="people">
					<ChartTooltip>
						{(datum) => (
							<div className="bar-tooltip">
								<div>{formatTimestamp(datum.datetime as number)}</div>
								<div>People: {datum.people}</div>
							</div>
						)}
					</ChartTooltip>
				</Bar>
				<Line
					metric="adoptionRate"
					metricAxis="adoption"
					color={{ value: 'indigo-900' }}
					interactionMode="item"
					scaleType="point"
				>
					<ChartTooltip>
						{(datum) => (
							<div className="line-tooltip">
								<div>{formatTimestamp(datum.datetime as number)}</div>
								<div>Adoption Rate: {datum.adoptionRate}</div>
							</div>
						)}
					</ChartTooltip>
				</Line>
			</Combo>
		</Chart>
	);
};

function formatTimestamp(epoch: number): string {
	const date = new Date(epoch);
	return date.toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	});
}

const aggregateData = {
	1667890800000: {
		1: 10,
		2: 10,
		3: 10,
		4: 10,
		total: 40,
	},
	1667977200000: {
		1: 20,
		2: 20,
		3: 20,
		4: 20,
		total: 80,
	},
	1668063600000: {
		1: 30,
		2: 30,
		3: 30,
		4: 30,
		total: 120,
	},
	1668150000000: {
		1: 20,
		2: 20,
		3: 20,
		4: 20,
		total: 80,
	},
	1668236400000: {
		1: 10,
		2: 10,
		3: 10,
		4: 10,
		total: 40,
	},
	1668322800000: {
		1: 30,
		2: 30,
		3: 30,
		4: 30,
		total: 120,
	},
	1668409200000: {
		1: 2,
		2: 2,
		3: 2,
		4: 2,
		total: 8,
	},
};

const seriesLabels = {
	1: 'Category 1',
	2: 'Category 2',
	3: 'Category 3',
	4: 'Category 4',
	total: 'Total',
};

const seriesColors = {
	1: '#0FB5AE',
	2: '#4046CA',
	3: '#F68511',
	4: '#DE3D82',
};

const DualAxisStory: StoryFn<typeof Combo> = (args): ReactElement => {
	const chartProps = useChartProps({ ...defaultChartProps, data: peopleTotalComboData });
	return (
		<Chart {...chartProps} debug>
			<Axis position="left" name="people" title="People" grid />
			<Axis position="right" name="total" title="Total" />
			<Axis position="bottom" labelFormat="time" baseline ticks />
			<Combo {...args}>
				<Bar metric="people" metricAxis="people" color="series">
					<ChartTooltip>
						{(datum) => (
							<div className="bar-tooltip">
								<table style={{ width: '100%' }}>
									<tbody>
										<tr>
											<td style={{ paddingRight: '10px' }}>Date</td>
											<td style={{ textAlign: 'right' }}>
												{formatTimestamp(datum.datetime as number)}
											</td>
										</tr>
									</tbody>
								</table>
								<table>
									<tbody>
										{Object.entries(aggregateData[datum.datetime]).map(([key, value]) => (
											<tr key={key}>
												<td style={{ paddingRight: '10px' }}>
													<div
														style={{
															width: '10px',
															height: '10px',
															backgroundColor: seriesColors[key],
															display: 'inline-block',
															marginRight: '5px',
														}}
													/>
												</td>
												<td style={{ paddingRight: '10px' }}>{seriesLabels[key]}</td>
												<td style={{ textAlign: 'right' }}>{value as number}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						)}
					</ChartTooltip>
				</Bar>
				<Line
					metric="total"
					metricAxis="total"
					color={{ value: 'indigo-900' }}
					interactionMode="item"
					scaleType="point"
					opacity="isLine"
				>
					<ChartTooltip excludeDataKeys={['people']}>
						{(datum) => (
							<div className="line-tooltip">
								<table>
									<tbody>
										<tr>
											<td style={{ paddingRight: '10px' }}>Date</td>
											<td style={{ textAlign: 'right' }}>
												{formatTimestamp(datum.datetime as number)}
											</td>
										</tr>
										<tr>
											<td style={{ paddingRight: '10px' }}>Cumulative number of people</td>
											<td style={{ textAlign: 'right' }}>{datum.total}</td>
										</tr>
									</tbody>
								</table>
							</div>
						)}
					</ChartTooltip>
				</Line>
			</Combo>
		</Chart>
	);
};

const Basic = bindWithProps(BasicComboStory);
Basic.args = {
	name: 'combo0',
	dimension: 'datetime',
};

const Tooltip = bindWithProps(TooltipStory);
Tooltip.args = {
	name: 'combo0',
	dimension: 'datetime',
};

const DualAxis = bindWithProps(DualAxisStory);
DualAxis.args = {
	name: 'combo0',
	dimension: 'datetime',
};

export { Basic, Tooltip, DualAxis };
