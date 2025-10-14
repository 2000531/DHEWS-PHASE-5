// /src/components/controls/FilterMenu.js

import React from 'react';

function FilterMenu() {
  return (
    <div className="control-group">
      <label>Secondary Layers</label>
      <div>
        <input type="checkbox" id="population" name="population" />
        <label htmlFor="population" style={{ fontWeight: 'normal', marginLeft: '5px' }}>Population Density</label>
      </div>
      <div>
        <input type="checkbox" id="agri" name="agri" />
        <label htmlFor="agri" style={{ fontWeight: 'normal', marginLeft: '5px' }}>Agricultural Land</label>
      </div>
      <div>
        <input type="checkbox" id="infra" name="infra" />
        <label htmlFor="infra" style={{ fontWeight: 'normal', marginLeft: '5px' }}>Major Infrastructure</label>
      </div>
    </div>
  );
}

export default FilterMenu;