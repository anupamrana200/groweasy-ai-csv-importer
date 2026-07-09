let progress = {
  status: "idle",

  totalRecords: 0,
  processedRecords: 0,

  totalBatches: 0,
  completedBatches: 0,

  workers: 0,

  provider: "auto",

  startTime: null,
  endTime: null,
};

const initializeProgress = ({
  totalRecords,
  totalBatches,
  workers,
  provider,
}) => {
  progress = {
    status: "processing",

    totalRecords,
    processedRecords: 0,

    totalBatches,
    completedBatches: 0,

    workers,

    provider,

    startTime: Date.now(),
    endTime: null,
  };
};

const updateProgress = ({
  processedRecords = 0,
  completedBatches = 0,
}) => {
  progress.processedRecords += processedRecords;
  progress.completedBatches += completedBatches;
};

const completeProgress = () => {
  progress.status = "completed";
  progress.endTime = Date.now();
};

const failProgress = () => {
  progress.status = "failed";
  progress.endTime = Date.now();
};

const getProgress = () => {
  const elapsed =
    progress.startTime
      ? Math.floor((Date.now() - progress.startTime) / 1000)
      : 0;

  const percentage =
    progress.totalRecords === 0
      ? 0
      : Math.round(
          (progress.processedRecords /
            progress.totalRecords) *
            100
        );

  return {
    ...progress,
    elapsed,
    percentage,
  };
};

module.exports = {
  initializeProgress,
  updateProgress,
  completeProgress,
  failProgress,
  getProgress,
};