import { IField } from "../IField";
import { IItem } from "../../../interfaces/field";

export interface ISelectFieldProps extends IField<{} | {}> {
    options: IItem[];
    value?: IItem;
}
