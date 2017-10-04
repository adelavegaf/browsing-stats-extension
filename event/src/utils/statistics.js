import Api from './api';

export default class Statistics {
    static getTodayTopFivePercentages() {
        const yesterdayOffset = 1;
        return Api.getTimeSpentSince(yesterdayOffset)
                  .then(results => {
                      const totalFrequency = results.reduce((total, cur) => total + cur.total, 0);
                      const sortedResponse = results.sort((a, b) => b.total - a.total);
                      const percentages = sortedResponse.slice(0, 4);
                      const otherDomainsFrequency = totalFrequency -
                                                    percentages.reduce((total, cur) => total + cur.total, 0);
                      percentages.push({'_id': 'Other Domains', 'total': otherDomainsFrequency});
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