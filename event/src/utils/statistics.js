import Api from './api';

export default class Statistics {
    static getTodayTopFivePercentages() {
        const sinceDate = new Date();
        sinceDate.setHours(0, 0, 0, 0);
        return Api.getTimeSpentSince(sinceDate)
                  .then(results => {
                      const totalFrequency = results.reduce((total, cur) => total + cur.total, 0);
                      const sortedResponse = results.sort((a, b) => b.total - a.total);
                      let percentages;
                      if (sortedResponse.length <= 5) {
                          percentages = sortedResponse;
                      } else {
                          percentages = sortedResponse.slice(0, 4);
                          const otherDomainsFrequency = totalFrequency -
                                                        percentages.reduce((total, cur) => total + cur.total, 0);
                          percentages.push({'_id': 'Other Domains', 'total': otherDomainsFrequency});
                      }
                      return percentages.map(e => {
                          return {
                              hostname: e._id,
                              percentage: e.total / totalFrequency
                          }
                      });
                  })
                  .catch(error => {
                      console.error(error);
                  });
    }
}