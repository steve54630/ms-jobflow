import { Status } from "@prisma/client-data";
import { CandidacyStatus } from "src/domain/enums/candidacy.enum";

export class StatusMapper {
  static toPrisma(status: CandidacyStatus): Status {
    switch (status) {
      case CandidacyStatus.PREPARED:
        return Status.prepared;
      case CandidacyStatus.PENDING:
        return Status.pending;
      case CandidacyStatus.INTERVIEW_PLANNED:
        return Status.interview_planned;
      case CandidacyStatus.REFUSED:
        return Status.refused;
    }
  }

  static toDomainFromPrisma(prismaStatus: Status): CandidacyStatus {
    switch (prismaStatus) {
      case Status.prepared:
        return CandidacyStatus.PREPARED;
      case Status.pending:
        return CandidacyStatus.PENDING;
      case Status.interview_planned:
        return CandidacyStatus.INTERVIEW_PLANNED;
      case Status.refused:
        return CandidacyStatus.REFUSED;
    }
  }
}