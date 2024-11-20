/**
 * Need to capture user events, timestamps, user data
 * queue the events in the AnalyticsService
 * At a certain delay look into the queue, and send batches of events to service
 * Remove the sent items.
 *
 */

class AnalyticsService {
  constructor(delay, batchSize) {
    this.eventQueue = [];
    this.delay = delay;
    this.batchSize = batchSize;
  }

  eventMapper(eventType, userdata) {
    this.eventQueue.push({
      type: eventType,
      user: userdata,
      timeStamp: new Date().toISOString(),
    });
  }

  publishEvents() {
    let published = 1;
    setInterval(() => {
      const setOfEvents = this.eventQueue.splice(0, this.batchSize);
      if (setOfEvents.length > 0) {
        console.log(`Published events ${published++}`, setOfEvents);
      }
    }, this.delay);
  }
}

const analyticsService = new AnalyticsService(5000, 10);
analyticsService.publishEvents();

let eventId = 1;
setInterval(() => {
  const userId = Math.floor(Math.random() * 10);
  analyticsService.eventMapper(`event${eventId++}`, {
    userId: userId,
    admin: Math.random() < 0.5,
  });
}, 200);
