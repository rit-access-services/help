import React from 'react';
import { push } from 'gatsby';

import SearchIcon from './search-icon';

class SearchForm extends React.Component {
  state = { enabled: true, focused: false };
  inputSelector = 'docsearch';

  /**
   * Replace the default selection event, allowing us to do client-side
   * navigation thus avoiding a full page refresh.
   *
   * Ref: https://github.com/algolia/autocomplete.js#events
   */
  autocompleteSelected = e => {
    e.stopPropagation();
    // Use an anchor tag to parse the absolute url (from autocomplete.js) into a relative url
    // eslint-disable-next-line no-undef
    const a = document.createElement(`a`);
    a.href = e._args[0].url;
    this.searchInput.blur();
    push(`${a.pathname}${a.hash}`);
  };

  componentDidMount() {
    if (
      typeof window === `undefined` || // eslint-disable-line no-undef
      typeof window.docsearch === `undefined` // eslint-disable-line no-undef
    ) {
      console.warn(`Search has failed to load and now is being disabled`);
      this.setState({ enabled: false });
      return;
    }

    // eslint-disable-next-line no-undef
    window.addEventListener(
      `autocomplete:selected`,
      this.autocompleteSelected,
      true
    );

    const { apiKey, indexName } = this.props.algolia;

    // eslint-disable-next-line no-undef
    window.docsearch({
      apiKey,
      indexName,
      inputSelector: this.inputSelector,
      debug: false,
      autocompleteOptions: {
        openOnFocus: true,
        autoselect: true,
        hint: false,
        keyboardShortcuts: [`s`],
      },
    });
  }

  render() {
    const { enabled, focused } = this.state;

    return enabled ? (
      <form
        className="searchWrap"
        style={{
          display: 'flex',
          flex: '0 0 auto',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 0,
        }}
        onSubmit={e => e.preventDefault()}
      >
        <label style={{ position: 'relative' }}>
          <input
            id={this.inputSelector.slice(1)}
            style={{
              appearance: 'none',
              backgroundColor: 'transparent',
              border: 0,
              borderRadius: '5px',
              color: '#000',
              overflow: 'hidden',
              transition:
                'width 250ms cubic-bezier(0.4, 0, 0.2, 1), background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            type="search"
            placeholder="Search"
            aria-label="Search"
            title="Hit 's' to search docs"
            onFocus={() => this.setState({ focused: true })}
            onBlur={() => this.setState({ focused: false })}
            ref={input => {
              this.searchInput = input;
            }}
          />
          <SearchIcon
            style={{
              position: 'absolute',
              left: '5px',
              top: '50%',
              width: '16px',
              height: '16px',
              pointerEvents: 'none',
              transition: 'fill 250ms cubic-bezier(0.4, 0, 0.2, 1)',
              transform: 'translateY(-50%)',
            }}
          />
        </label>
      </form>
    ) : null;
  }
}

export default SearchForm;
