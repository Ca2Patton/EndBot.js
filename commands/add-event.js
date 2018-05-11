const { st_host_key, st_api_key, st_engine_name } = require('./config.json');
const SwiftypeAppSearchClient = require("swiftype-app-search-node");

module.exports = {
    name: 'add-event',
    description: 'Add scheduled event to the calendar.',
    args: true,
    execute(message, args) {
        const searchClient = new SwiftypeAppSearchClient(st_host_key, st_api_key);
        document = [
            {
                id: "", // Must be unique for each document.
                title: "",
                description: "",
                event_date: "", // Must be an ISO 8601 Format Date.
                num_players: "", // Must be a number.
                timezone: ""
            }
        ];
    }
};