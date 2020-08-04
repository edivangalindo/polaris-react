/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { WithAppProviderProps } from '../../utilities/with-app-provider';
import { DataTableState, SortDirection, VerticalAlign } from './types';
export { SortDirection };
declare type CombinedProps = DataTableProps & WithAppProviderProps;
export declare type TableRow = DataTableProps['headings'] | DataTableProps['rows'] | DataTableProps['totals'];
export declare type TableData = string | number | React.ReactNode;
export declare type ColumnContentType = 'text' | 'numeric';
export interface DataTableProps {
    /** List of data types, which determines content alignment for each column. Data types are "text," which aligns left, or "numeric," which aligns right. */
    columnContentTypes: ColumnContentType[];
    /** List of column headings. */
    headings: React.ReactNode[];
    /** List of numeric column totals, highlighted in the table’s header below column headings. Use empty strings as placeholders for columns with no total. */
    totals?: TableData[];
    /** Custom totals row heading */
    totalsName?: {
        singular: string;
        plural: string;
    };
    /** Placement of totals row within table */
    showTotalsInFooter?: boolean;
    /** Lists of data points which map to table body rows. */
    rows: TableData[][];
    /** Hide column visibility and navigation buttons above the header when the table horizontally collapses to be scrollable.
     * @default false
     */
    hideScrollIndicator?: boolean;
    /** Truncate content in first column instead of wrapping.
     * @default true
     */
    truncate?: boolean;
    /** Vertical alignment of content in the cells.
     * @default 'top'
     */
    verticalAlign?: VerticalAlign;
    /** Content centered in the full width cell of the table footer row. */
    footerContent?: TableData;
    /** List of booleans, which maps to whether sorting is enabled or not for each column. Defaults to false for all columns.  */
    sortable?: boolean[];
    /**
     * The direction to sort the table rows on first click or keypress of a sortable column heading. Defaults to ascending.
     * @default 'ascending'
     */
    defaultSortDirection?: SortDirection;
    /**
     * The index of the heading that the table rows are initially sorted by. Defaults to the first column.
     * @default 0
     */
    initialSortColumnIndex?: number;
    /** Callback fired on click or keypress of a sortable column heading. */
    onSort?(headingIndex: number, direction: SortDirection): void;
}
declare class DataTableInner extends React.PureComponent<CombinedProps, DataTableState> {
    state: DataTableState;
    private dataTable;
    private scrollContainer;
    private table;
    private handleResize;
    componentDidMount(): void;
    componentDidUpdate(prevProps: DataTableProps): void;
    render(): JSX.Element;
    private calculateColumnVisibilityData;
    private scrollListener;
    private navigateTable;
    private renderHeadings;
    private totalsRowHeading;
    private renderTotals;
    private defaultRenderRow;
    private defaultOnSort;
}
export declare const DataTable: React.FunctionComponent<DataTableProps> & import("hoist-non-react-statics").NonReactStatics<(React.ComponentClass<CombinedProps, any> & typeof DataTableInner) | (React.FunctionComponent<CombinedProps> & typeof DataTableInner), {}>;