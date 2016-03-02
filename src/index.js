import Balloon from '@economist/component-balloon';
import Button from '@economist/component-link-button';
import List from '@economist/component-list';
import React from 'react';

export default class Accordion extends React.Component {

  static get propTypes() {
    return {
      list: React.PropTypes.array.isRequired,
    };
  }

  renderListContent(contentList, level) {
    level++;

    return contentList.map((contentItem, i) => {
      let listcontentItem = '';
      let classNameList = [ 'accordion__link' ];
      const commonProps = {
        href: contentItem.href,
        key: `${ i }`,
      };
      if (contentItem.hr) {
        return <hr key={commonProps.key} className="accordion__hr" />;
      }

      // Spread icon props.
      if (contentItem.icon || (contentItem.children && contentItem.children.length > 0)) {
        commonProps.icon = {
          ...contentItem.icon,
          size: '28px',
        };
      }
      // Add the arrow down for expandable links
      if (contentItem.children && contentItem.children.length > 0) {
        commonProps.icon.icon = 'down';
      }

      if (contentItem.i13nModel) {
        commonProps.i13nModel = contentItem.i13nModel; // eslint-disable-line id-match
      }

      if (contentItem.target) {
        commonProps.target = contentItem.target;
      }

      if (contentItem.target === '_blank') {
        classNameList.push('accordion__link--external');
      }
      // By default we want the component unstyled.
      // But overridable via prop.
      commonProps.unstyled = contentItem.unstyled !== false;

      if (contentItem.className) {
        classNameList = classNameList.concat(contentItem.className.split(' '));
      }
      commonProps.className = `${ classNameList.join(' ') }`;

      listcontentItem = (
        <Button {...commonProps}>
          {contentItem.title}
        </Button>
      );
      // Recursive part
      if (contentItem.children && contentItem.children.length > 0) {
        listcontentItem = (
          <Balloon
            prefix="accordion-expander"
            className={`accordion__level${ level }`}
            unstyled
            key={`level${ level }-${ i }`}
            trigger={listcontentItem}
          >
          <List>
            {this.renderListContent(contentItem.children, level)}
          </List>
        </Balloon>
      );
      }
      return listcontentItem;
    });
  }

  render() {
    const contentList = this.props.list;
    const level = 0;
    return (
      <List className="accordion">
        {this.renderListContent(contentList, level)}
      </List>
    );
  }
}
