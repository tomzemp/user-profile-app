import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardText } from 'material-ui/Card';

import InfoRow from '../layout/InfoRow.component';
import InfoHeader from '../layout/InfoHeader.component';

const styles = {
    card: {
        marginTop: 8,
        marginRight: '1rem',
        padding: '0 1rem',
    },
};

const AboutSection = ({ header, attributes }) => (
    <div>
        <InfoHeader text={header} />
        <Card style={styles.card}>
            <CardText>
                <table className="info-content">
                    {attributes.map(({ label, value }) => (
                        <InfoRow
                            key={label}
                            label={label}
                            value={
                                typeof value === 'boolean'
                                    ? value.toString()
                                    : value
                            }
                        />
                    ))}
                </table>
            </CardText>
        </Card>
    </div>
);

AboutSection.propTypes = {
    header: PropTypes.string.isRequired,
    attributes: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
        })
    ).isRequired,
};

export default AboutSection;
