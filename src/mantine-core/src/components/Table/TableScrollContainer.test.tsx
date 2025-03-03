import { tests } from '@mantine/tests';
import {
  TableScrollContainer,
  TableScrollContainerProps,
  TableScrollContainerStylesNames,
} from './TableScrollContainer';

const defaultProps: TableScrollContainerProps = {
  minWidth: 300,
};

describe('@mantine/core/TableScrollContainer', () => {
  tests.itSupportsSystemProps<TableScrollContainerProps, TableScrollContainerStylesNames>({
    component: TableScrollContainer,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/TableScrollContainer',
    stylesApiSelectors: ['scrollContainer', 'scrollContainerInner'],
  });
});
