import React from "react";
import { FormattedDate } from 'react-intl';
import { FormattedNumber } from 'react-intl';
import { FormattedMessage } from 'react-intl';
import { FormattedPlural } from 'react-intl';

const Job = (props) => {
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>
        {props.offer.salary}{" "}
        <FormattedPlural
          value={props.offer.salary}
          one={<FormattedMessage id="Million" values={{ count: props.offer.salary }} />}
          other={<FormattedMessage id="Million" values={{ count: props.offer.salary }} />}
        />
      </td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      <td>
        <FormattedNumber
          value={props.offer.views}
        />
      </td>
    </tr>
  );
};

export default Job;
