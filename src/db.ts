import * as mongoose from 'mongoose';
export class MongoDB {
  private readonly connectionString: string;
  private readonly options: mongoose.ConnectionOptions;
  constructor(cnStr: string, opts: mongoose.ConnectionOptions) {
    this.connectionString = cnStr;
    this.options =
      opts ?? <mongoose.ConnectionOptions>{ useNewUrlParser: true, useUnifiedTopology: true };
  }
  public static connect(connectionString: string, options: mongoose.ConnectionOptions): void {
    mongoose.connect(connectionString, options);
  }
}
