import Image from "next/image";
import React, {FC} from 'react';
import DropdownIndicatorSrc from "../../public/dropdownIndicator.png";
import {Flex} from "../Flex/styles";
import {Label} from "../Input/styles";
import {SelectStyled} from "./styles";

export type OptionType = {
  value: string,
  label: string
}

type Props = {
  value: OptionType | null,
  onChange: any,
  options: { value: string, label: string }[],
  label?: string,
}

const DropdownIndicator = () => <div style={{padding: 10}}><Image
  src={DropdownIndicatorSrc} alt=''/></div>

const Select: FC<Props> = (props) => {
  const {label, options, value, onChange} = props
  return (
    <Flex alignItems="end" gap='14px' direction="column" width="100%">
      {
        !!label && <Label>{label}</Label>
      }
      <SelectStyled
        classNamePrefix='Select'
        placeholder=''
        components={{DropdownIndicator}}
        options={options}
        value={options.find(c => value ? c.value === value.value : false)}
        onChange={val => onChange((val as OptionType).value)}
        theme={(theme: { colors: any; }) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: 'rgba(177,177,177,0.6)',
            primary: '#B1B1B1',
          },
        })}
      />
    </Flex>
  );
};

export default Select;
